import React, { Component } from "react";
import { withRouter } from "react-router";
import NotFoundImage from "./images/NotFound";

class NotFound extends Component {
  disableScroll() {
    document.body.classList.add("overflow-hidden");
  }

  enableScroll() {
    document.body.classList.remove("overflow-hidden");
  }

  componentDidMount() {
    this.disableScroll();
  }

  componentDidUpdate() {
    this.disableScroll();
  }

  componentWillUnmount() {
    this.enableScroll();
  }

  render() {
    return (
      <div
        className="pin fixed flex justify-center items-center z-50"
        onClick={this.props.history.goBack}
      >
        <div
          className="pin fixed opacity-50"
          style={{ background: "#34a245" }}
        />

        <div
          className="Box relative p-15 text-center"
          style={{ background: "#34a245" }}
        >
          <NotFoundImage />
          <h1 className="text-4xl text-white">Soon</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(NotFound);
