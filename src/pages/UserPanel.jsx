import React, { useEffect, useState } from 'react';
import { blockUser, unblockUser, fetchAllUsers } from '../services/userpanelservice';

const UserPanel = ({ token }) => {

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
        
      </table>
    </div>
  );
};

export default UserPanel;