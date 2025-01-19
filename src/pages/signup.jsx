import React from 'react';
import AuthContainer from './components/AuthContainer';
import AuthTitle from '../components/AuthTitle';


const Signup = () => {

  return (
    <AuthContainer>
      <AuthTitle title="Signup" subtitle="Create your account" />
    </AuthContainer>
  );
};

export default Signup;