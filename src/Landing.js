import React, { Component } from 'react';
import Logo from "./Logo";

class App extends Component {
  render() {
    return (
      <div className="max-w-xl mx-auto p-15">
        <header className="text-center">
          <Logo className="fill-current" />
          <h2>Welcome to React</h2>
        </header>
      </div>
    );
  }
}

export default App;
