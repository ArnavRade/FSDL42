// src/components/EventDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EventDetail.css';  // Import EventDetail specific styles

const events = [
  { id: 1, name: "React Conference 2025", date: "2025-06-10", location: "New York", description: "A conference about React and modern JavaScript technologies." },
  { id: 2, name: "JavaScript Workshop", date: "2025-07-15", location: "San Francisco", description: "A workshop focusing on JavaScript and ES6 features." },
  { id: 3, name: "Web Development Bootcamp", date: "2025-08-20", location: "Los Angeles", description: "An intensive bootcamp for full-stack web development." },
];

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  return (
    <div className="event-detail">
      <h1>{event?.name}</h1>
      <p>Date: {event?.date}</p>
      <p>Location: {event?.location}</p>
      <p>Description: {event?.description}</p>
    </div>
  );
};

export default EventDetail;
