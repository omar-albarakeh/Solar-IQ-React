import axios from 'axios';
const apiUrl = 'http://localhost:3001/items';

export const getItems = async (page = 1, limit = 10) => {
  return axios.get(`${apiUrl}?page=${page}&limit=${limit}`);
};

export const getItemById = async (id) => {
  return axios.get(`${apiUrl}/${id}`);
};

export const createItem = async (itemData) => {
  return axios.post(apiUrl, itemData);
};

export const updateItem = async (id, itemData) => {
  return axios.put(`${apiUrl}/${id}`, itemData);
};

export const deleteItem = async (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};
