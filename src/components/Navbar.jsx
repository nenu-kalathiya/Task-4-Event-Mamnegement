import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav>
            <Link to="/">Home</Link>
            {user ? (
                <>
                    <Link to="/create-event">Create Event</Link>
                    <Link to="/user-events">My Events</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;
