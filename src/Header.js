import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/Logo";
import { Down } from "./Icons";

class Header extends Component {
  render() {
    return (
      <header className="flex items-center mb-6">
        <Logo width={180} height={24} className="flex-none" />

        <div className="flex-1" />

        <Down className="block flex-none ml-4" />
        <Link to="/app/sign-out">Sign out</Link>
      </header>
    );
  }
}

export default Header;
