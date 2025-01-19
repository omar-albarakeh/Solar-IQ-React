import React from 'react';

const AuthButton = ({ type, children }) => {
  return (
    <button type={type} className="auth-button">
      {children}
    </button>
  );
};

export default AuthButton;