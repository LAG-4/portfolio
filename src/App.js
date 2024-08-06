import React from 'react';
import AppRoutes from './routes';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <div>
    <Navbar></Navbar>
      <AppRoutes />
    </div>
  );
};

export default App;
