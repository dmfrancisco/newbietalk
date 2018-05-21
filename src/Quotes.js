import React, { Component } from "react";
import { Left, Right } from "./Icons";

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latestAction: "increment",
      currentItemIndex: 0,
    };
  }

  showPrevious = () => {
    const { currentItemIndex } = this.state;
    const { length } = this.props.items;

    this.setState({
      latestAction: "decrement",
      currentItemIndex:
        (currentItemIndex === 0 ? length : currentItemIndex) - 1,
    });
  };

  showNext = () => {
    const { currentItemIndex } = this.state;
    const { length } = this.props.items;

    this.setState({
      latestAction: "increment",
      currentItemIndex: (currentItemIndex + 1) % length,
    });
  };

  unschedule() {
    clearTimeout(this.timer);
  }

  scheduleNext() {
    this.unschedule();
    this.timer = setTimeout(this.showNext, 10000);
  }

  componentDidUpdate() {
    this.scheduleNext();
  }

  componentDidMount() {
    this.scheduleNext();
  }

  componentWillUnmount() {
    this.unschedule();
  }

  renderItem(item, className) {
    const itemClassName = `mx-8 pl-6 pr-4 text-brown leading-normal ${className}`;

    return (
      <blockquote key={item.author} className={itemClassName}>
        {item.text}

        <footer className="mt-4">
          —{" "}
          <a
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit"
          >
            {item.author}
          </a>, {item.job}
        </footer>
      </blockquote>
    );
  }

  render() {
    const { title, items, className = "" } = this.props;
    const { latestAction, currentItemIndex } = this.state;
    const latestItemIndex =
      latestAction === "increment"
        ? (currentItemIndex === 0 ? items.length : currentItemIndex) - 1
        : (currentItemIndex + 1) % items.length;

    const latestItemClassName = `absolute animated slide-out-${
      latestAction === "decrement" ? "right" : "left"
    }`;
    const currentItemClassName = `animated slide-in-${
      latestAction === "increment" ? "right" : "left"
    }`;

    return (
      <div className={className}>
        <h3 className="text-lg italic m-8 mb-6">{title}</h3>

        <div className="flex items-center mb-8" style={{ height: 120 }}>
          <button
            className="flex-none Button bg-grey-light -ml-8 -mr-6 -mt-8 z-10"
            onClick={this.showPrevious}
          >
            <Left className="block" />
          </button>

          <div className="relative flex-1 h-full flex items-center overflow-hidden">
            {this.renderItem(items[latestItemIndex], latestItemClassName)}
            {this.renderItem(items[currentItemIndex], currentItemClassName)}
          </div>

          <button
            className="flex-none Button bg-grey-light -mr-8 -ml-6 -mt-8 z-10"
            onClick={this.showNext}
          >
            <Right className="block" />
          </button>
        </div>
      </div>
    );
  }
}

export default Quotes;
