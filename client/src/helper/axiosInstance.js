import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optional: Add a request interceptor
axiosInstance.interceptors.request.use(
    config => {
        // Attach the token to the headers if it exists
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Optional: Add a response interceptor
axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // Handle errors, like redirecting to login if unauthorized
        if (error.response.status === 401) {
            // Redirect to login or perform some action
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
