import React, { Component } from "react";

class Flash extends Component {
  handleDismiss = () => {
    const { history } = this.props;
    history.replace({ ...history.location, state: { flash: null } });
  };

  render() {
    const { state = {} } = this.props.history.location;

    if (state.flash) {
      return (
        <div className="fixed pin-t pin-x z-50 flex justify-center pointer-events-none">
          <div
            className={`Box m-6 bg-yellow-lightest px-4 py-3 text-center font-bold leading-tight cursor-pointer pointer-events-auto${
              state.flashType === "error" ? " animated shake" : ""
            }`}
            onClick={this.handleDismiss}
          >
            {state.flash}
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Flash;
