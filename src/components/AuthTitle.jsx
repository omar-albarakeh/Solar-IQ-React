import React from 'react';

const AuthTitle = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="auth-title">{title}</h2>
      <p className="auth-subtitle">{subtitle}</p>
    </>
  );
};

export default AuthTitle;