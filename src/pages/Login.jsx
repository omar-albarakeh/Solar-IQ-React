import React, { useState } from 'react';
import AuthContainer from '../components/AuthContainer';
import AuthTitle from '../components/AuthTitle';
import InputField from '../components/InputField';
import AuthButton from '../components/authbutton';
import AuthFooter from '../components/authfooter';
import ErrorMessage from '../components/errormessage';

const Login = () => {

     const [formData, setFormData] = useState({ email: '', password: '' });
     const [error, setError] = useState(null);
     const navigate = useNavigate();
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