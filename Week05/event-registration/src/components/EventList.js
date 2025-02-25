// src/components/EventList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EventList.css';  // Import EventList specific styles

const events = [
  { id: 1, name: "React Conference 2025", date: "2025-06-10", location: "New York" },
  { id: 2, name: "JavaScript Workshop", date: "2025-07-15", location: "San Francisco" },
  { id: 3, name: "Web Development Bootcamp", date: "2025-08-20", location: "Los Angeles" },
];

const EventList = () => {
  return (
    <div className="event-list">
      <h1>Upcoming Events</h1>
      {events.map((event) => (
        <div key={event.id} className="event-item">
          <h2>{event.name}</h2>
          <p>{event.date} - {event.location}</p>
          <Link to={`/event/${event.id}`}>View Details</Link>
          <br />
          <Link to={`/register/${event.id}`}>Register</Link>
        </div>
      ))}
    </div>
  );
};

export default EventList;
