// components/AdminPage.js
import React, { useState } from 'react';

const AdminPage = ({ data1, data2, onUpdateData }) => {
    const [newData1, setNewData1] = useState('');
    const [newData2, setNewData2] = useState('');

    const handleUpdateData = () => {
        onUpdateData({ data1: newData1, data2: newData2 });
        setNewData1('');
        setNewData2('');
    };

    return (
        <div>
            <h1>Welcome to the Admin Page</h1>
            <div>
                <label>Data 1:</label>
                <input
                    type="text"
                    value={newData1}
                    onChange={(e) => setNewData1(e.target.value)}
                    placeholder={data1}
                />
            </div>
            <div>
                <label>Data 2:</label>
                <input
                    type="text"
                    value={newData2}
                    onChange={(e) => setNewData2(e.target.value)}
                    placeholder={data2}
                />
            </div>
            <button onClick={handleUpdateData}>Update Data</button>
        </div>
    );
};

export default AdminPage;
