import axios from 'axios';

export default axios.create({
    baseURL: 'https://movie-backend-java.onrender.com',  // Added the missing colon
    headers: { "ngrok-skip-browser-warning": "true" }
});
