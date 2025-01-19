import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import AuthContainer from '../components/AuthContainer';
import AuthTitle from '../components/AuthTitle';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';
import AuthFooter from '../components/AuthFooter';
import ErrorMessage from '../components/ErrorMessage';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
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
      const response = await AuthService.login(formData.email, formData.password);
      console.log('Login successful:', response);
      localStorage.setItem('accessToken', response.data.accessToken);
      navigate('/dashboard');
    } catch (err) {
      const status = err.response?.status;
      if (status === 401) {
        setError('Invalid credentials');
      } else if (status === 500) {
        setError('Server error. Please try again later.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <AuthContainer>
      <AuthTitle title="Login" subtitle="Welcome back! Please login to your account." />
      <ErrorMessage message={error} />
      <form onSubmit={handleSubmit}>
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
        <AuthButton type="submit">Login</AuthButton>
      </form>
      <AuthFooter text="Don't have an account?" linkText="Signup" linkUrl="/signup" />
    </AuthContainer>
  );
};

export default Login;