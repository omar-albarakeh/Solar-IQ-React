import React from 'react';
import AuthContainer from './components/AuthContainer';
import AuthTitle from '../components/AuthTitle';
import ErrorMessage from '../components/ErrorMessage';

const Signup = () => {

  return (
    <AuthContainer>
      <AuthTitle title="Signup" subtitle="Create your account" />
      <ErrorMessage message={error} />
    </AuthContainer>
  );
};

export default Signup;