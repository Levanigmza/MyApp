import React from 'react';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import AuthPage from './components/AuthPage/AuthPage';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<AuthPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
