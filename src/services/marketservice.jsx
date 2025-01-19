import axios from 'axios';
import '../styles/styles.css';
const apiUrl = 'http://localhost:3001/items';

export const getItems = async (page = 1, limit = 10) => {
  return axios.get(`${apiUrl}?page=${page}&limit=${limit}`);
};

export const getItemById = async (id) => {
  return axios.get(`${apiUrl}/${id}`);
};


