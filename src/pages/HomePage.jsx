import React, { useState, useEffect } from 'react';
import { useEvents } from '../contexts/EventContext';
import EventCard from '../components/EventCard';
import EventForm from '../components/EventForm';

const HomePage = () => {
    const { events, addEvent, removeEvent } = useEvents();
    const [eventData, setEventData] = useState({ title: '', description: '', date: '', location: '', maxAttendees: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEvent(eventData);
        setEventData({ title: '', description: '', date: '', location: '', maxAttendees: '' });
    };

    const handleDelete = async (id) => {
        await removeEvent(id);
    };

    return (
        <div className="home-container">
            <h1>Event Management</h1>
            <EventForm onSubmit={handleSubmit} event={eventData} handleChange={handleChange} />
            <div className="event-list">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;

