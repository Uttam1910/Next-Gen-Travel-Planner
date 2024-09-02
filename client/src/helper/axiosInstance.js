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
        if (error.response) {
            // Handle HTTP errors
            if (error.response.status === 401) {
                // Redirect to login or perform some action
                window.location.href = '/login'; // Example redirection
            } else if (error.response.status === 500) {
                // Handle server errors
                console.error('Server error:', error.response.data.error || 'Something went wrong');
            }
            return Promise.reject(error.response.data.error || 'Something went wrong');
        } else {
            // Handle network errors
            console.error('Network error:', error.message);
            return Promise.reject('Network error: Please check your internet connection.');
        }
    }
);

export default axiosInstance;
