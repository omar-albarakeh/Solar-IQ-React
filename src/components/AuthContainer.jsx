import React from 'react';
import "../../styles/Auth.css";

const AuthContainer = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;