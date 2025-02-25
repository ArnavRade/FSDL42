// components/CarbonChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const CarbonChart = ({ carbonData }) => {
  const data = {
    labels: carbonData.map((item, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: 'Carbon Footprint (kg CO2)',
        data: carbonData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h3>Carbon Footprint Over Time</h3>
      <Line data={data} />
    </div>
  );
};

export default CarbonChart;
