import axios from 'axios';

const API_URL = 'https://api.example.com/auth';

export async function loginUser(credentials) {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
}

export async function registerUser(userData) {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
}
