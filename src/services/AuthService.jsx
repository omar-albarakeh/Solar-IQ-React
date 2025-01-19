import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3001/auth',
    });
  }

 async login(email, password) {
  try {
    const response = await this.api.post('/login', { email, password });
    console.log('Server response:', response.data); 
    const accessToken = response.data.data.accessToken; 
    console.log('Token received from server:', accessToken); 
    localStorage.setItem('accessToken', accessToken);
    return response.data;
  } catch (error) {
    throw error;
  }
}

  async signup(userData) {
    try {
      const response = await this.api.post('/signup', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  getUser() {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return null;
    }
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    return decodedToken;
  }
}

export default new AuthService();