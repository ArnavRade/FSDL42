// utils/carbonCalculations.js
export const calculateTransportation = (distance) => {
    const emissionFactor = 0.192; // kg/km for gasoline car
    return distance * emissionFactor;
  };
  
  export const calculateElectricity = (kWh) => {
    const emissionFactor = 0.4; // kg CO2 per kWh
    return kWh * emissionFactor;
  };
  
  export const calculateFood = (kg) => {
    const beefEmissions = 5.6; // kg CO2 per kg of beef
    return kg * beefEmissions;
  };
  