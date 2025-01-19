import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const Dashboard = () => {
  
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


export default Dashboard;
