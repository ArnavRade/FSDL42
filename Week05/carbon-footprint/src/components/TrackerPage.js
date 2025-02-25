// components/TrackerPage.js
import React from 'react';

const TrackerPage = ({ totalCarbon }) => {
  return (
    <div>
      <h2>Your Total Carbon Footprint:</h2>
      <p>{totalCarbon} kg CO2</p>
      <h3>Suggestions to Reduce Your Footprint:</h3>
      <ul>
        <li>Use public transportation more.</li>
        <li>Switch to energy-efficient appliances.</li>
        <li>Reduce red meat consumption.</li>
      </ul>
    </div>
  );
};

export default TrackerPage;
