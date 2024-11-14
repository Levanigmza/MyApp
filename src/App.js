import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import AuthPage from './components/AuthPage/AuthPage';

const App = () => {
  return (
    <Router>
      <Routes> {/* This replaces the Switch component */}
        <Route path="/" element={<AuthPage />} /> {/* Use the 'element' prop to pass components */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
