import axios from 'axios';

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3001/auth',
    });
  }
}

export default new AuthService();