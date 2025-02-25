// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TrackerPage from './components/TrackerPage';

const App = () => {
  const [totalCarbon, setTotalCarbon] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setTotalCarbon={setTotalCarbon} />} />
        <Route path="/tracker" element={<TrackerPage totalCarbon={totalCarbon} />} />
      </Routes>
    </Router>
  );
};

export default App;
