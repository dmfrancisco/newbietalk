import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <Router basename="/alpha">
        <Route path="/alpha">
          <Route exact path="/" component={Landing} />
        </Route>
      </Router>
    );
  }
}

export default App;
