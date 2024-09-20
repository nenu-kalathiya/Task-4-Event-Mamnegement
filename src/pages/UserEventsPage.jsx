import React, { useEffect } from 'react';
import { useEvents } from '../contexts/EventContext';
import EventCard from '../components/EventCard';

function UserEventsPage() {
    const { events } = useEvents();

    useEffect(() => {
        // Fetch user events if needed
    }, []);

    return (
        <div>
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
}

export default UserEventsPage;
