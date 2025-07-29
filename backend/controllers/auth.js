const User = require('../models/user');
const OTP = require('../models/otp');
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mailSender = require('../config/mailSender');
require('dotenv').config();

exports.sendOtp = async(req,res)=>{
    try{
        console.log("I am in send otp")
        const {email} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(401).json({
                success:false,
                message:"user already exists , please log in",
            })
        }

        var otp = otpGenerator.generate(6,{
            lowerCaseAlphabets:false,
            upperCaseAlphabets:false,
            specialChars:false
        });

        let result = await OTP.findOne({otp});

        while(result){
            otp = otpGenerator.generate(6,{
                lowerCaseAlphabets:false,
                upperCaseAlphabets:false,
                specialChars:false
            });
            result = await OTP.findOne({otp});
        }

        const otpPayload = {email,otp};

        const otpBody = await OTP.create(otpPayload);
        console.log(otpBody);
        console.log(email);

        res.status(200).json({
            success:true,
            message:"otp sent successfully on the email",
        })

    } catch(error){
        console.log("Error while making entry for otp : ",error);
        return res.status(500).json({
            success:false,
            message:"error while creating otp",
        })
    }
}

exports.signUp = async (req,res)=>{
    try{

        const{
            name,
            email,
            password,
            confirmPassword,
            otp,
        } = req.body;

        console.log(
            name,
            email,
            password,
            confirmPassword,
            otp,)

        if(!email || !password || !confirmPassword || !otp || !name){
            return res.status(403).json({
                success:false,
                message:"Please fill all the fields",
            })
        }

        if(password!==confirmPassword){
            return res.status(400).json({
                success:false,
                message:"passwords doesn't match",
            })
        }

        const userPresent = await User.findOne({email});
        if(userPresent){
            return res.status(400).json({
                success:false,
                message:"user already exists, please login ",
            });
        }

        const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        console.log("Recent otp is ",recentOtp);
        console.log("otp in req is : ",otp);

        if(recentOtp.length===0){
            return res.status(400).json({
                success:false,
                message:"otp not found",
            })
        }

        if(recentOtp[0].otp != otp){
            return res.status(400).json({
                success:false,
                message:"otp is incorrect",
            })
        }

        const hashedPassword =await bcrypt.hash(password,10);

        const userData = await User.create({
            name,
            email,
            password:hashedPassword,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${name}`
        });

        return res.status(200).json({
            success:true,
            userData,
            message:"user registered successfully",
        })

    } catch(error){
        console.log("Error while signup : ",error);
        return res.status(500).json({
            success:false,
            message:"error while signup",
        })
    }
} 
exports.login = async(req,res)=>{
    try{
        
        const {email,password} = req.body;
        console.log("email and password are : ",email,password);

        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"all the fields are required",
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not registered please signup first",
            })
        }
        
        if(await bcrypt.compare(password,user.password)){

            const payload = {
                email:user.email,
                accountType:user.accountType,
                id:user._id,
            }
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            })

            user.token = token;
            user.password = password;

            const options = {
                expiresIn: new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,

            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"user logged in successfully",
            })

        }

        else{
            return res.status(401).json({
                success:false,
                message:"password is incorrect",
            })
        }

       

    } catch(error){
        console.log("Error occurred while logging in : ",error);
        return res.status(500).json({
            success:false,
            message:"Login failure, please try again",
        })
    }
}

exports.changePassword = async(req,res) =>{

   try{
       const {password,newPassword,confirmPassword} = req.body;

        if(!newPassword || !confirmPassword){
            return res.status(403).json({
                success:false,
                message:"all the fields are required",
            })
        }

        if(newPassword!=confirmPassword){
            return res.status(400).json({
                success:false,
                message:"passwords does not match",
            })
        }

        const hashedPassword = bcrypt.hash(newPassword,10);

        const user = await User.findOneAndUpdate(
            {password},
            { password:hashedPassword},
            {new:true}
        )

        const title = "Password change"
        const body = "Your password has been changed successfully"
        const email = user.email;
        const response = await mailSender(email,title,body);
        console.log(response);

        return res.status(200).json({
            success:true,
            message:"password has been changed succesfully"
        })

   } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"error while changing password",
        })
   }

}
