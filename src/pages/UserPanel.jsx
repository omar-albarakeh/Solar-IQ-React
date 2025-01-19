import React, { useEffect, useState } from 'react';
import { blockUser, unblockUser, fetchAllUsers } from '../services/userpanelservice';

const UserPanel = ({ token }) => {

  return (
    <div>
      <h1>User Management Panel</h1>
    </div>
  );
};

export default UserPanel;