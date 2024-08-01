import axios from 'axios';
const api = axios.create({
    // baseURL: `https://mike-token-backend-1.onrender.com/api`,
    baseURL: `http://localhost:3000/api`,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  export default api;