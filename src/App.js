import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import UserPanel from './pages/UserPanel';
import MarketPanel from './pages/MarketPanel';
import CreateItem from './pages/market/createitem';
import DeleteItem from './pages/market/DeleteItem';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-panel" element={<UserPanel />} />
          <Route path="/market-panel" element={<MarketPanel />} />
          <Route path="/create-item" element={<CreateItem />} />
          <Route path="/delete-item" element={<DeleteItem />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;