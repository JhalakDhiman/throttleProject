import {toast} from "react-hot-toast"
import { setLoading,setToken } from "../../redux/slices/AuthSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

export const sendOtp = (email,navigate)=>{
    return async (dispatch)=> {
        const toastId = toast.loading("loading....");
        dispatch(setLoading(true));

        try{
            const response = await apiConnector("POST",endpoints.SENDOTP_API,{
                email,
                checkUserPresent: true,
            });
            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success(response.data.message);
            navigate("/verify-email")
        } catch(error){
            console.log("Error occurred : ",error);
            toast.error("Could not send OTP");
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}

export const signup = (email,password,confirmPassword,name,accountType,otp,navigate)=>{
    return async(dispatch)=>{
        const toastId = toast.loading("loading...");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST",endpoints.SIGNUP_API,{
                email,password,confirmPassword,name,accountType,otp
            });
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            navigate("/login");

        } catch(error){
            console.log("Error occured during signup : ",error);
            toast.error("unable to signup");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export const login =(email,password,navigate)=>{
    return async(dispatch)=>{
        const toastId = toast.loading("loading...");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST",endpoints.LOGIN_API,{
                email,password
            });
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            dispatch(setToken(response.data.token));
            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user",JSON.stringify(response.data.user))
            navigate("/");
        } catch (error){
            console.log("error occurred during login : ",error);
            toast.error("unable to login");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export const resetPasswordToken = (email,setEmailSent)=>{
    return async(dispatch)=>{
        const toastId = toast.loading("loading...");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST",endpoints.RESETPASSTOKEN_API,{
                email
            });
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            setEmailSent(true);
        } catch(error){
            console.log("error occurred during sending reset mail: ",error);
            toast.error("could not send reset mail");
        } 
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export const resetPassword = (password,confirmPassword,token)=>{
    return async(dispatch)=>{
        const toastId = toast.loading("loading...");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST",endpoints.RESETPASSWORD_API,{
                password,confirmPassword,token
            })
            if(!response.data.success){
                toast.error(response.data.message);
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            
        } catch(error){
            console.log("error occurred during reset password : ",error);
            toast.error("could not reset password");
        }   
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export const logout =(navigate)=>{
    return async(dispatch)=>{
        dispatch(setToken(null));
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        toast.success("logged out");
        navigate("/");
    }
}
