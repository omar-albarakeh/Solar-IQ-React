import React, { useEffect, useState } from 'react';
import { fetchAllUsers, blockUser, unblockUser } from '../services/userpanelservice';
import AuthService from '../services/AuthService';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchAllUsers(token);
        setUsers(data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getUsers();
  }, [token]);

  const handleBlockUser = async (userId) => {
    try {
      const updatedUser = await blockUser(userId, token);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === userId ? updatedUser : user))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUnblockUser = async (userId) => {
    try {
      const updatedUser = await unblockUser(userId, token);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === userId ? updatedUser : user))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.blocked ? 'Blocked' : 'Active'}</td>
              <td>
                {user.blocked ? (
                  <button onClick={() => handleUnblockUser(user.id)}>Unblock</button>
                ) : (
                  <button onClick={() => handleBlockUser(user.id)}>Block</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;