import React, { Component } from "react";
import Avatar from "./Avatar";

class FeedbackBuilder extends Component {
  state = {};

  handleClick = (rating, author, about) => {
    // Prevent duplicate submissions
    if (this.state.rating) return;

    const { onClick = () => {} } = this.props;
    this.setState({ rating });
    onClick(rating, author, about);
  };

  render() {
    const { author, about, className = "", style = {} } = this.props;
    const avatarClassName = "inline-block mr-2 cursor-pointer";
    const notSelectedClassName = "opacity-50";
    const rating = this.props.rating || this.state.rating;

    return (
      <div
        className={`Box bg-purple-lightest p-6 text-center italic leading-normal ${className}`}
        style={style}
      >
        <p className="mb-4">
          How are you feeling about this conversation? Was @{about.username}{" "}
          friendly and respectful?
        </p>
        <p className="mb-4">
          This feedback is anonymous and is not shared with @{about.username}.
        </p>

        <div className="mb-4 inline-block">
          <Avatar
            {...author.avatarStyles}
            eyebrowType="SadConcerned"
            eyeType="Cry"
            mouthType="Sad"
            size="3rem"
            className={`${avatarClassName} ${
              !rating || rating === 1 ? "" : notSelectedClassName
            }`}
            onClick={() => this.handleClick(1, author, about)}
          />
          <Avatar
            {...author.avatarStyles}
            mouthType="Serious"
            size="3rem"
            className={`${avatarClassName} ${
              !rating || rating === 2 ? "" : notSelectedClassName
            }`}
            onClick={() => this.handleClick(2, author, about)}
          />
          <Avatar
            {...author.avatarStyles}
            mouthType="Twinkle"
            size="3rem"
            className={`${avatarClassName} ${
              !rating || rating === 3 ? "" : notSelectedClassName
            }`}
            onClick={() => this.handleClick(3, author, about)}
          />
          <Avatar
            {...author.avatarStyles}
            eyebrowType="RaisedExcited"
            eyeType="Hearts"
            mouthType="Smile"
            size="3rem"
            className={`${avatarClassName} ${
              !rating || rating === 4 ? "" : notSelectedClassName
            }`}
            onClick={() => this.handleClick(4, author, about)}
          />
        </div>

        <p>Please, pick one.</p>
      </div>
    );
  }
}

export default FeedbackBuilder;
