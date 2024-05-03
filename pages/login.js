// pages/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        // Simplified authentication logic
        if (username === 'admin' && password === 'admin') {
            // Set isLoggedIn to true after successful authentication
            localStorage.setItem('isLoggedIn', 'true');
            router.push('/admin'); // Redirect to the admin page
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
