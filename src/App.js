import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthPage from './components/AuthPage/AuthPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuthPage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
