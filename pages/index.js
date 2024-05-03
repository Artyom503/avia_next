// pages/index.js
import React, { useState, useEffect } from 'react';

const Index = () => {
    const [data, setData] = useState({ data1: '', data2: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/data');
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Main Page</h1>
            <p>Data 1: {data.data1}</p>
            <p>Data 2: {data.data2}</p>
        </div>
    );
};

export default Index;
