import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { loginUser } from '../api/auth';

function LoginPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { token } = await loginUser({ email, password });
            login(token);
            // Redirect user
        } catch (error) {
            // Handle error
            console.error('Login failed', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                required
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginPage;
