// components/IndexPage.js
import React from 'react';

const IndexPage = ({ data1, data2 }) => {
    return (
        <div>
            <h1>Welcome to the Index Page</h1>
            <p>Data 1: {data1}</p>
            <p>Data 2: {data2}</p>
        </div>
    );
}

export default IndexPage;
