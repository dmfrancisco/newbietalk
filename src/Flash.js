import React, { Component } from "react";

class Flash extends Component {
  handleDismiss = () => {
    const { history } = this.props;
    const state = { ...history.location.state, flash: null };

    history.replace({ ...history.location, state });
  }

  render() {
    const { state = {} } = this.props.history.location;
    
    if (state.flash) {
      return (
        <div className="fixed pin-t pin-x z-50 flex justify-center">
          <div
            className="Box m-6 bg-yellow-lightest px-4 py-3 text-center text-lg font-bold leading-tight cursor-pointer"
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
