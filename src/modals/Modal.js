import React, { Component } from "react";

class Modal extends Component {
  handleDismiss = e => {
    e.preventDefault();
    this.enableScroll();
    this.props.onDismiss();
  };

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
    const { children, className = "relative" } = this.props;

    return (
      <div
        className="fixed pin overflow-auto z-30 cursor-pointer"
        onClick={this.handleDismiss}
      >
        <div className="fixed bg-brown-lightest pin pointer-events-none opacity-85 animated slideInUp" />

        <div className={className}>{children}</div>
      </div>
    );
  }
}

export default Modal;
