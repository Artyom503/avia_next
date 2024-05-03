// pages/admin.js
import React, { useState } from 'react';
import AdminPage from '../components/AdminPage';

const Admin = () => {
    const [data, setData] = useState({ data1: '', data2: '' });

    const handleUpdateData = async (newData) => {
        try {
            const response = await fetch('/api/updateData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newData }),
            });
            if (response.ok) {
                console.log('Data updated successfully');
                setData(newData);
            } else {
                console.error('Failed to update data');
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return <AdminPage data1={data.data1} data2={data.data2} onUpdateData={handleUpdateData} />;
};

export default Admin;
