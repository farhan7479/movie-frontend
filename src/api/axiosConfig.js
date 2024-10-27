import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8090',  // Added the missing colon
    headers: { "ngrok-skip-browser-warning": "true" }
});
