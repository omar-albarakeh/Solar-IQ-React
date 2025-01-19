import axios from 'axios';
import jwtDecode from 'jwt-decode';


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
 const token = localStorage.getItem('accessToken');
const decodedToken = jwtDecode(token);
console.log(decodedToken);
}

}

export default new AuthService();