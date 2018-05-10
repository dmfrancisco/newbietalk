import React, { Component } from "react";
import screens from "./demo/screens";
import { Left, Right } from "./Icons";
import "./Demo.css";

class Demo extends Component {
  state = {
    screenIndex: 0,
  };

  showPrevious = () => {
    this.demo.scrollTop = 0;
    this.setState({ screenIndex: this.state.screenIndex - 1 });
  };

  showNext = () => {
    this.demo.scrollTop = 0;
    this.setState({ screenIndex: this.state.screenIndex + 1 });
  };

  scrollToBottom = () => {
    if (this.demo) this.demo.scrollTop = this.demo.scrollHeight;
  }

  render() {
    const { screenIndex } = this.state;
    const currentStep = screens[screenIndex];

    const previousButtonClassName = `flex-none Button bg-grey-light -ml-8 -mr-6 -mt-8 z-10 ${
      screenIndex > 0 ? "" : "invisible"
    }`;
    const nextButtonClassName = `flex-none Button bg-grey-light -ml-8 -mr-6 -mt-8 z-10 ${
      screenIndex + 1 < screens.length ? "" : "invisible"
    }`;

    return (
      <div className="mb-8 flex items-center">
        <button className={previousButtonClassName} onClick={this.showPrevious}>
          <Left className="block" />
        </button>

        <div className="flex-1 Box overflow-hidden">
          <h4 className="text-lg italic px-6 py-4 bg-grey-light rounded-lg rounded-b-none border-b-3">
            Step {screenIndex + 1}: &nbsp;{currentStep.title}
          </h4>

          <div className="Demo bg-white" ref={node => (this.demo = node)}>
            {<currentStep.screen showNext={this.showNext} scrollToBottom={this.scrollToBottom} />}
          </div>
        </div>

        <button className={nextButtonClassName} onClick={this.showNext}>
          <Right className="block" />
        </button>
      </div>
    );
  }
}

export default Demo;
