import React from 'react'
import Navbar from '../Navbar/Navbar'
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    /**  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // This is a dummy login logic, replace with real authentication
        if (username === 'admin' && password === 'password') {
            onLogin();
        } else {
            alert('Invalid credentials');
        }
    }; */
    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
