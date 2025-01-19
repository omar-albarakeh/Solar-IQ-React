import React, { useEffect, useState } from 'react';
import { blockUser, unblockUser, fetchAllUsers } from '../services/userpanelservice';

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

 

  return (
    <div>
      <h1>User Management Panel</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
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

export default UserPanel;