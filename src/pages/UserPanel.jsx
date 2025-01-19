import React, { useEffect, useState } from 'react';
import { blockUser, unblockUser, fetchAllUsers } from '../services/userpanelservice';
import '../style/userpanel.css';

const UserPanel = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchAllUsers(token);
        setUsers(data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadUsers();
  }, [token]);

  const handleBlockUser = async (userId) => {
    try {
      const updatedData = await blockUser(userId, token);
      const updatedUser = updatedData.user;
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, blocked: updatedUser.blocked } : user
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUnblockUser = async (userId) => {
    try {
      const updatedData = await unblockUser(userId, token);
      const updatedUser = updatedData.user;
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, blocked: updatedUser.blocked } : user
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const dismissError = () => setError(null);

  if (loading) return <div>Loading users...</div>;

  return (
    <div className="user-panel-container">
      <h2>User Management Panel</h2>

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
          <div key={user._id} className="user-item">
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-email">{user.email}</div>
              <div className="user-phone">{user.phone}</div>
              <div className="user-status">
                Status: {user.blocked ? 'Blocked' : 'Active'}
              </div>
            </div>
            <div>
              {user.blocked ? (
                <button
                  className="action-btn unblock-btn"
                  onClick={() => handleUnblockUser(user._id)}
                >
                  Unblock
                </button>
              ) : (
                <button
                  className="action-btn block-btn"
                  onClick={() => handleBlockUser(user._id)}
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

export default UserPanel;
