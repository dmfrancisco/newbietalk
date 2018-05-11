import React, { Component } from "react";
import { Subscribe } from "unstated";
import { Link } from "react-router-dom";
import SessionContainer from "./SessionContainer";
import Logo from "./images/Logo";
import Avatar from "./Avatar";
import { Down } from "./Icons";

class Header extends Component {
  render() {
    return (
      <Subscribe to={[SessionContainer]}>
        {session => (
          <header className="flex items-center mb-6">
            <Link to="/app" className="flex-none text-inherit">
              <Logo width={180} height={24} />
            </Link>

            <div className="flex-1" />

            <Avatar {...session.state.avatarStyles} className="block flex-none" size="2.5rem" />
            <Down className="block flex-none ml-4" />

            <Link to="/app/profile">Edit profile</Link>
            <Link to="/app/sign-out">Sign out</Link>
          </header>
        )}
      </Subscribe>
    );
  }
}

export default Header;
