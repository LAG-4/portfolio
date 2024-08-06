import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import HomePage from './pages/home/home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/navbar" element={<Navbar />} />
       
      </Routes>
    </Router>
  );
};

export default AppRoutes;
