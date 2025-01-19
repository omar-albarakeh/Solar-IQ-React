import React from 'react';
import AuthContainer from './components/AuthContainer';
import AuthTitle from '../components/AuthTitle';
import ErrorMessage from '../components/ErrorMessage';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';


const Signup = () => {

  return (
    <AuthContainer>
      <AuthTitle title="Signup" subtitle="Create your account" />
      <ErrorMessage message={error} />
       <form onSubmit={handleSubmit}>
       
      </form>
    </AuthContainer>
  );
};

export default Signup;