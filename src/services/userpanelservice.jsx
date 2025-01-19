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
    return response.data;
  } catch (error) {
    console.error('Error blocking user:', error.response?.data?.message || error.message);
    throw error;
  }
};


