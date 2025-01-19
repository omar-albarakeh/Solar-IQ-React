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
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  
}

export default new AuthService();