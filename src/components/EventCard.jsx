// import React from 'react';
// import { Link } from 'react-router-dom';

// function EventCard({ event }) {
//     return (
//         <div className="event-card">
//             <h2>{event.title}</h2>
//             <p>{event.description}</p>
//             <Link to={`/events/${event.id}`}>View Details</Link>
//         </div>
//     );
// }

// export default EventCard;

import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event, onDelete }) => {
    return (
        <div className="event-card">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <button onClick={() => onDelete(event.id)}>Delete</button>
            <Link to={`/events/${event.id}`}>Edit</Link>
        </div>
    );
};

export default EventCard;


