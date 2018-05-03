import React, { Component } from 'react';
import Logo from "./Logo";

class App extends Component {
  render() {
    return (
      <div className="container mx-auto p-8">
        <Logo className="fill-current" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

export default App;
