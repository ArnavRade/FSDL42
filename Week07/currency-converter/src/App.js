import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyConverter from './components/CurrencyConverter';
import RealTimeTracking from './components/RealTimeTracking';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="/real-time" element={<RealTimeTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
