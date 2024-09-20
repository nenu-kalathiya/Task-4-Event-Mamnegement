import React from 'react';

const EventForm = ({ onSubmit, event, handleChange }) => {
    return (
        <form onSubmit={onSubmit} className="event-form">
            <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={event.title}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Event Description"
                value={event.description}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={event.date}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="location"
                placeholder="Event Location"
                value={event.location}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="maxAttendees"
                placeholder="Max Attendees"
                value={event.maxAttendees}
                onChange={handleChange}
                required
            />
            <button type="submit">Save Event</button>
        </form>
    );
};

export default EventForm;
