import React from 'react';

const InputField = ({ type, name, placeholder, value }) => {
  return (
    <div className="input-group">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputField;