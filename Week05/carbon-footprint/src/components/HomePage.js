// components/HomePage.js
import React, { useState } from 'react';
import { calculateTransportation, calculateElectricity, calculateFood } from '../utils/carbonCalculations';

const HomePage = ({ setTotalCarbon }) => {
  const [distance, setDistance] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [food, setFood] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission

    // Calculate emissions
    const transportCarbon = calculateTransportation(distance);
    const electricityCarbon = calculateElectricity(electricity);
    const foodCarbon = calculateFood(food);
    
    // Total carbon footprint
    const totalCarbon = transportCarbon + electricityCarbon + foodCarbon;
    
    // Update the state in parent (App.js)
    setTotalCarbon(totalCarbon);
  };

  return (
    <div>
      <h1>Carbon Footprint Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Distance Traveled (km):</label>
          <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
        </div>
        <div>
          <label>Electricity Usage (kWh):</label>
          <input type="number" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
        </div>
        <div>
          <label>Food Consumption :</label>
          <input type="number" value={food} onChange={(e) => setFood(e.target.value)} />
        </div>
        <button type="submit">Calculate Footprint</button>
      </form>
    </div>
  );
};

export default HomePage;
