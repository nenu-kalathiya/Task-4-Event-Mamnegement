import { createContext, useState, useContext, useEffect } from 'react';
import { getEvents, createEvent } from '../api/events';

const EventContext = createContext();

export function EventProvider({ children }) {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const data = await getEvents();
        setEvents(data);
    };

    const addEvent = async (eventData) => {
        const newEvent = await createEvent(eventData);
        setEvents([...events, newEvent]);
    };

    const editEvent = async (eventId, eventData) => {
        // Update event logic here, maybe with an API call
        const updatedEvent = { ...events.find(event => event.id === eventId), ...eventData };
        setEvents(events.map(event => (event.id === eventId ? updatedEvent : event)));
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <EventContext.Provider value={{ events, addEvent, editEvent }}>
            {children}
        </EventContext.Provider>
    );
}

export function useEvents() {
    return useContext(EventContext);
}
