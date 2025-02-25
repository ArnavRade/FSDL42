// src/components/RegistrationForm.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/RegistrationForm.css';  // Import RegistrationForm specific styles

const RegistrationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`User Registered for Event ${id}:`, { name, email });
    navigate('/thank-you');
  };

  return (
    <div className="registration-form">
      <h1>Register for Event {id}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
