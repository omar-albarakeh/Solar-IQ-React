import React from 'react';

const InputField = ({ type, name, placeholder, value, onChange, required }) => {
  return (
    <div className="input-group">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
        required={required}
      />
    </div>
  );
};

export default InputField;