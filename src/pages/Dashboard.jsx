import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import '../style/Dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      setUserData(decodedToken);

      if (decodedToken.type === 'User' || decodedToken.type === 'Engineer') {
        alert("You can't be here.");
        navigate('/login');
      } else if (decodedToken.type === 'Admin') {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Invalid or expired token", error);
      navigate('/login');
    }
  }, [navigate]);

  if (userData && userData.type === 'admin') {
    return (
      <div className="dashboard-container">
        <h2>Welcome, Admin</h2>
        <div>
          <button onClick={() => navigate('/user-panel')}>User Panel</button>
          <button onClick={() => navigate('/market-panel')}>Market Panel</button>
        </div>
      </div>
    );
  }

  return null;
};

export default Dashboard;
