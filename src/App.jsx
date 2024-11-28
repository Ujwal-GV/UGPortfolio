import React from 'react';
import Home from './components/Home';
import AllMessages from './components/AllMessages';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allmessages" element={<AllMessages />} />
      </Routes>
    </Router>
  );
}

export default App;
