import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import { Link, withRouter } from "react-router-dom";
import Select from "react-select";
import SessionContainer from "./containers/SessionContainer";
import Logo from "./images/Logo";
import Avatar from "./Avatar";
import "./Header.css";

class Header extends Component {
  handleSelect = option => {
    this.props.history.push(option.value);
  };

  render() {
    const options = [
      { value: "/app/profile", label: "Edit profile" },
      { value: "/app/sign-out", label: "Sign out" },
    ];

    const styles = {
      control() {},
      singleValue() {},
      placeholder() {},
      indicatorsContainer() {},
      indicatorSeparator() {},
      dropdownIndicator() {},
      menu() {},
      option() {},
    };

    return (
      <Subscribe to={[SessionContainer]}>
        {session => {
          const ValueContainer = ({ children }) => (
            <Fragment>
              <Avatar
                {...session.state.avatarStyles}
                className="inline-block flex-none cursor-pointer"
                size="2.5rem"
              />
              {children}
            </Fragment>
          );

          return (
            <header className="flex items-center mb-3 p-3 pl-6">
              <Link to="/app" className="flex-none text-inherit">
                <Logo width={180} height={24} />
              </Link>

              <div className="flex-1" />

              <div className="flex-none">
                <Select
                  onChange={this.handleSelect}
                  components={{
                    ValueContainer,
                  }}
                  options={options}
                  isSearchable={false}
                  classNamePrefix="Select"
                  styles={styles}
                />
              </div>
            </header>
          );
        }}
      </Subscribe>
    );
  }
}

export default withRouter(Header);
