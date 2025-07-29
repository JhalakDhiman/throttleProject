import React from 'react'
import Template from '../components/Template'
import login from '../assets/login.webp'

const Login = () => {
  return (
    <div className="w-full">
      <Template
        heading="Welcome Back"
        image={login}
        formType="login"
      />
    </div>
  )
}

export default Login
