import React, { useState } from 'react';
import axios from 'axios';

const Query = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await axios.post('http://localhost:5000/api/queries', { query }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setResponse(res.data.response);
        } catch (error) {
            console.error('Query failed:', error);
        }
    };

    return (
        <div>
            <h2>Query Travel Information</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask about a destination"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {response && <div>Response: {response}</div>}
        </div>
    );
};

export default Query;
