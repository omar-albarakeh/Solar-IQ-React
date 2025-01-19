import React from 'react';

const AuthFooter = ({ text, linkText, linkUrl }) => {
  return (
    <div className="auth-footer">
      <p>{text} <a href={linkUrl}>{linkText}</a></p>
    </div>
  );
};

export default AuthFooter;