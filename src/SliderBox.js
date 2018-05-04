import React, { Component } from 'react';
import "./animate.css";

class SliderBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latestAction: 'increment',
      currentItemIndex: 0,
    }
  }
  
  showPrevious = () => {
    const { currentItemIndex } = this.state;
    const { length } = this.props.items;

    this.setState({
      latestAction: 'decrement',
      currentItemIndex: (currentItemIndex === 0 ? length : currentItemIndex) - 1,
    });
  }

  showNext = () => {
    const { currentItemIndex } = this.state;
    const { length } = this.props.items;

    this.setState({
      latestAction: 'increment',
      currentItemIndex: (currentItemIndex + 1) % length,
    });
  }

  scheduleNext() {
    clearTimeout(this.timer);
    this.timer = setTimeout(this.showNext, 5000);
  }

  componentDidUpdate() {
    this.scheduleNext();
  }

  componentDidMount() {
    this.scheduleNext();
  }

  renderItem(item, className) {
    const allClassNames = `flex-1 px-8 mb-8 text-brown leading-normal ${className}`;

    return (
      <blockquote key={item.author} className={allClassNames}>
        {item.text}

        <footer className="mt-4">
          — <a href={item.src} target="_blank" rel="noopener noreferrer">{item.author}</a>, {item.job}
        </footer>
      </blockquote>
    );
  }

  render() {
    const { title, items, className = "" } = this.props;
    const { latestAction, currentItemIndex } = this.state;
    const latestItemIndex = latestAction === 'increment' ?  
      (currentItemIndex === 0 ? items.length : currentItemIndex) - 1 :
      (currentItemIndex + 1) % items.length;

    const latestItemClassName = `absolute animated slideOut${ latestAction === 'decrement' ? "Right" : "Left" }`;
    const currentItemClassName = `animated slideIn${ latestAction === 'increment' ? "Right" : "Left" }`;
    const boxClassName = `border-3 rounded-lg shadow ${className}`;

    return (
      <section className={boxClassName}>
        <h3 className="text-xl italic m-8">{ title }</h3>

        <button className="Button bg-grey-light" onClick={this.showPrevious}>◀</button>
        <button className="Button bg-grey-light" onClick={this.showNext}>▶</button>

        <div className="relative overflow-hidden">
          {this.renderItem(items[latestItemIndex], latestItemClassName)}
          {this.renderItem(items[currentItemIndex], currentItemClassName)}
        </div>
      </section>  
    );
  }
}

export default SliderBox;
