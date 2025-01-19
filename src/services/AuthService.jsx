import axios from 'axios';

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3001/auth', 
    });
  }


  async login(email, password) {
    try {
      const response = await this.api.post('/login', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data));
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
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

}

export default new AuthService();