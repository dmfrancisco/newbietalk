import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/landing" component={Landing} />
      </Router>
    );
  }
}

export default App;
