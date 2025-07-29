import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { setSignupData } from '../redux/slices/AuthSlice'
import { sendOtp } from '../services/operations/authApis';

const SignupForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "", password: "", confirmPassword: "", email: ""
  })

  const [showpassword, setpassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    dispatch(setSignupData(formData));
    console.log("email in handleOnSubmit", formData.email);
    dispatch(sendOtp(formData.email, navigate));

  }

  return (
    <div className="w-11/12 max-width-[450px]">

      <form onSubmit={handleOnSubmit}>
        <div className="gap-x-4">
          <label
            className="w-full  text-[0.875rem] leading-[1.375rem] text-white opacity-60" htmlFor='name'>Name<sup className="text-red-600">*</sup></label>
          <input
            className="bg-[#161d29] mt-2 mb-2 rounded-[0.5rem] text-white w-full p-[12px] border-b-[0.05rem] border-[#e6e9db]"
            type="text"
            name="name"
            placeholder="Enter name"
            required
            value={formData.name}
            onChange={changeHandler}
          ></input>
        </div>

        <div>
          <label
            className="w-full text-[0.875rem] leading-[1.375rem] mb-4 text-white opacity-60"
            htmlFor='email'>Email Address<sup className="text-red-600">*</sup></label>
          <input
            className="bg-[#161d29] mt-2 mb-2 rounded-[0.5rem] text-white w-full p-[12px] border-b-[0.05rem] border-[#e6e9db]"
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            value={formData.email}
            onChange={changeHandler}
          ></input>
        </div>

        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] leading-[1.375rem] mb-2 text-white opacity-60">Create Password<sup className="text-red-600">*</sup></p>
            <input type={showpassword ? "text" : "password"}
              className="bg-[#161d29] rounded-[0.5rem] text-white w-full p-[12px] border-b-[0.05rem] border-[#e6e9db]"
              name="password"
              placeholder="Enter password"
              required
              value={formData.password}
              onChange={changeHandler}
            ></input>
            <span
              className="absolute right-3 top-[42px] cursor-pointer"
              onClick={() => {
                setpassword(!showpassword);
              }}>
              {
                showpassword ?

                  <AiOutlineEyeInvisible fontSize={24} fill='#afb2bf' />

                  : <AiOutlineEye fontSize={24} fill='#afb2bf' />
              }
            </span>
          </label>


          <label className="w-full relative">
            <p className="text-[0.875rem] leading-[1.375rem] mb-2 text-white opacity-60">Confirm Password<sup className="text-red-600">*</sup></p>
            <input type={showConfirmPassword ? "text" : "password"}
              className="bg-[#161d29] rounded-[0.5rem] text-white w-full p-[12px] border-b-[0.05rem] border-[#e6e9db]"
              name="confirmPassword"
              placeholder="Enter password"
              required
              value={formData.confirmPassword}
              onChange={changeHandler}
            ></input>
            <span
              className="absolute right-3 top-[42px] cursor-pointer"
              onClick={() => {
                setConfirmPassword(!showConfirmPassword);
              }}>
              {
                showConfirmPassword ?

                  <AiOutlineEyeInvisible fontSize={24} fill='#afb2bf' /> :

                  <AiOutlineEye fontSize={24} fill='#afb2bf' />
              }
            </span>
          </label>

        </div>

        <button type="submit"
          className="bg-yellow-200 rounded-[8px] mt-7 font-medium text-[#000814] px-[12px] py-[8px] w-full">Create Account</button>


      </form>
    </div>
  )
}

export default SignupForm
