import React, { useState } from 'react';
import { useEvents } from '../contexts/EventContext';
import EventForm from '../components/EventForm';

const CreateEventPage = () => {
    const { addEvent } = useEvents();
    const [eventData, setEventData] = useState({ title: '', description: '', date: '', location: '', maxAttendees: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEvent(eventData);
        // Redirect user after creating event (e.g., to HomePage)
    };

    return (
        <div>
            <h1>Create Event</h1>
            <EventForm onSubmit={handleSubmit} event={eventData} handleChange={handleChange} />
        </div>
    );
};

export default CreateEventPage;
