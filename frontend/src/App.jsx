import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import AskAI from './components/AskAI.jsx';
import LandingPage from './components/LandingPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/AskAI' element={<AskAI/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;