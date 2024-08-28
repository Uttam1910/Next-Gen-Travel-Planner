import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from the new package
import App from './App';
import './styles/global.css';

// Create a root container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
