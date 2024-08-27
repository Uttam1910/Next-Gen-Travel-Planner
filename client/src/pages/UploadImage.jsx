import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:5000/api/images/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });
            setResult(response.data.result);
        } catch (error) {
            console.error('Image upload failed:', error);
        }
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} required />
                <button type="submit">Upload</button>
            </form>
            {result && <div>Result: {result}</div>}
        </div>
    );
};

export default UploadImage;
