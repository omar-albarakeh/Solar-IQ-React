import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/auth';

export const blockUser = async (userId, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/block/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.user; 
  } catch (error) {
    console.error('Error blocking user:', error.response?.data?.message || error.message);
    throw error;
  }
};

export const unblockUser = async (userId, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/unblock/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.user;
  } catch (error) {
    console.error('Error unblocking user:', error.response?.data?.message || error.message);
    throw error;
  }
};

export const fetchAllUsers = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error.response?.data?.message || error.message);
    throw error;
  }
};


