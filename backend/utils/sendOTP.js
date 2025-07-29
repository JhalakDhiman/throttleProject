const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendOTP(email, otp) {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Password Reset",
    html: `<h3>Your OTP is: <b>${otp}</b></h3>`,
  });
}

module.exports = { sendOTP };
