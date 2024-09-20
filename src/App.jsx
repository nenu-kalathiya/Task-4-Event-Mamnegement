import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EventProvider } from './contexts/EventContext'; // Import the EventProvider
import CreateEventPage from './pages/CreateEventPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EventDetailPage from './pages/EventDetailPage';
import HomePage from './pages/HomePage';
// import App from './App';



function App() {
    return (
        <EventProvider> {/* Wrap your Router with EventProvider */}
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/create-event" element={<CreateEventPage />} />
                    <Route path="/events/:id" element={<EventDetailPage />} />
                </Routes>
            </Router>
        </EventProvider>
    );
}

export default App;
