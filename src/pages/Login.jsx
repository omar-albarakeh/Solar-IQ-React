import React, { useState } from 'react';
import AuthContainer from '../components/AuthContainer';
import AuthTitle from '../components/AuthTitle';
import InputField from '../components/InputField';
import AuthButton from '../components/authbutton';
import AuthFooter from '../components/authfooter';
import ErrorMessage from '../components/errormessage';

const Login = () => {

  return (
    <AuthContainer>
         <AuthTitle title="Login" subtitle="Welcome back! Please login to your account." />
         <ErrorMessage message={error} />
         <form onSubmit={}>

         </form>
    </AuthContainer>
  );
};

export default Login;