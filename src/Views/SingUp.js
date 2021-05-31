import React from 'react'
import Header from '../Components/Header';
import loginBack from '../Static/Images/login-back.png'


import SignUpForm from '../Components/SignUpForm';

import Footer from '../Components/Footer';


const SignUp = () => {
  return (  
    <div>
      <Header />
      <SignUpForm/>
      <Footer />
    </div>
  )
}

export default SignUp;
