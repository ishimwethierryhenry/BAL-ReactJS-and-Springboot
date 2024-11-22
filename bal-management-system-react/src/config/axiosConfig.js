// src/config/axiosConfig.js
import axios from 'axios';

// Set base URL to match your backend
axios.defaults.baseURL = 'http://localhost:8080'; // Adjust to your backend URL

export default axios;