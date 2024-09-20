import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEvents } from '../contexts/EventContext';
import EventForm from '../components/EventForm';

const EventDetailPage = () => {
    const { id } = useParams();
    const { events, editEvent } = useEvents();
    const [event, setEvent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const currentEvent = events.find(e => e.id === parseInt(id)); // Ensure id is an integer
        setEvent(currentEvent);
    }, [id, events]);

    const handleSubmit = async (eventData) => {
        await editEvent(parseInt(id), eventData); // Ensure id is an integer
        navigate('/'); // Redirect to home or wherever you want after edit
    };

    return (
        event ? <EventForm onSubmit={handleSubmit} event={event} /> : <p>Loading...</p>
    );
};

export default EventDetailPage;
