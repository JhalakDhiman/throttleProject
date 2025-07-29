import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.webp'

const Signup = () => {
  return (
    <div className="w-full">
      <Template 
        heading = 'Join the millions shopping with Ecomzy'
        formType = 'signup'
        image={signupImg}
        ></Template>
    </div>
  )
}

export default Signup
