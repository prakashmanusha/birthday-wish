import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ButterflyPage from './ButterflyPage';
import StoryPage from './StoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ButterflyPage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
