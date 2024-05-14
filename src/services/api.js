import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', // Change to your server URL
});

export default api;
