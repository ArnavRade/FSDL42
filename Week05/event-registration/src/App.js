// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import RegistrationForm from './components/RegistrationForm';
import ThankYou from './components/ThankYou';
import './styles/App.css';  // Import global styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/register/:id" element={<RegistrationForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
