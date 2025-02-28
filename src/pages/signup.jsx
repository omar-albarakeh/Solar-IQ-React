import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import AuthContainer from '../components/AuthContainer';
import AuthTitle from '../components/AuthTitle';
import ErrorMessage from '../components/ErrorMessage';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';
import AuthFooter from '../components/AuthFooter';

const Signup = () => {

 const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: 'user', 
    phone: '',
    address: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await AuthService.signup(formData);
      console.log('Signup successful:', response);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'An unexpected error occurred.');
    }
  };

  return (
    <AuthContainer>
      <AuthTitle title="Signup" subtitle="Create your account" />
      <ErrorMessage message={error} />
       <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="input-group">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="engineer">Engineer</option>
          </select>
        </div>
        <InputField
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <InputField
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <AuthButton type="submit">Signup</AuthButton>
      </form>
      <AuthFooter text="Already have an account?" linkText="Login" linkUrl="/login" />
    </AuthContainer>
  );
};

export default Signup;