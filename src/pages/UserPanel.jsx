import React, { useEffect, useState } from 'react';
import { fetchAllUsers, blockUser, unblockUser } from '../services/userpanelservice';
import '../style/userpanel.css'; 

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('accessToken'); 

 
  const fetchUsers = async () => {
    try {
      const data = await fetchAllUsers(token);
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);


  const handleBlockUser = async (userId) => {
    try {
      await blockUser(userId, token);
      await fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

 
  const handleUnblockUser = async (userId) => {
    try {
      await unblockUser(userId, token); 
      await fetchUsers(); 
    } catch (err) {
      setError(err.message);
    }
  };


  const dismissError = () => {
    setError(null);
  };

  if (loading) {
    return <div className="user-panel-container">Loading users...</div>;
  }

  return (
    <div className="user-panel-container">
      <h2>User Management</h2>

      {error && (
        <div className="error-message">
          <span>{error}</span>
          <button className="dismiss-btn" onClick={dismissError}>
            Dismiss
          </button>
        </div>
      )}

      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-email">{user.email}</div>
            </div>
            <div>
              {user.blocked ? (
                <button
                  className="action-btn unblock-btn"
                  onClick={() => handleUnblockUser(user.id)}
                >
                  Unblock
                </button>
              ) : (
                <button
                  className="action-btn block-btn"
                  onClick={() => handleBlockUser(user.id)}
                >
                  Block
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;