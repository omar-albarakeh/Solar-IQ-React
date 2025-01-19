import React from 'react';
import AuthContainer from '../components/AuthContainer';
import AuthTitle from '../components/AuthTitle';
import ErrorMessage from '../components/ErrorMessage';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';


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
    </AuthContainer>
  );
};

export default Signup;