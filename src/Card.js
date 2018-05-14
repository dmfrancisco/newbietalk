import React, { Component, Fragment } from "react";
import AvatarBadges from "./AvatarBadges";

class Card extends Component {
  renderAskHelp() {
    const { member, onClick, onHelpDescriptionChange } = this.props;
    
    return (
      <Fragment>
        <textarea
          className="block border-2 px-3 py-2 rounded w-full mb-4"
          placeholder="I need help with…"
          rows={2}
          value={member.helpDescription}
          onChange={onHelpDescriptionChange}
        />

        <div className="flex items-center">
          <button
            onClick={onClick}
            className="flex-none Button text-lg bg-brown-light"
          >
            Ask for help
          </button>

          <label className="flex-none select-none ml-4">
            <input type="checkbox" className="mr-1" /> I’ve read the Code of Conduct
          </label>
        </div>
      </Fragment>
    );
  }

  renderAskingHelp() {
    const { member, onClick } = this.props;
    
    return (
      <Fragment>
        <textarea
          className="block border-2 px-3 py-2 rounded w-full mb-4 bg-transparent text-black"
          readOnly
          disabled
          rows={2}
          value={member.helpDescription}
        />

        <button className="Button Button--disabled text-lg italic" disabled>
          Asking for help…
        </button>

        <button
          onClick={onClick}
          className="Button text-lg bg-brown-light float-right"
        >
          Stop asking
        </button>
      </Fragment>
    );
  }

  renderAcceptHelp() {
    const { onClick } = this.props;
    
    return (
      <button
        className="Button text-lg bg-brown-light mt-4"
        onClick={onClick}
      >
        Accept help
      </button>
    );
  }

  renderOfferHelp() {
    return (
      null
    );
  }
  
  renderOfferingHelp() {
    return (
      null
    );
  }
  
  renderAction() {
    const { action } = this.props;
    
    switch (action) {
    case "ask":
      return this.renderAskHelp();
    case "asking":
      return this.renderAskingHelp();
    case "accept":
      return this.renderAcceptHelp();
    case "offer":
      return this.renderOfferHelp();
    case "offering":
      return this.renderOfferingHelp();
    default:
      return null;
    }
  }

  render() {
    const { member, color = "brown", animated = false, className = "", owner = false } = this.props;
    const wrapperClassName = `bg-${color}-lightest rounded-lg p-6 ${className} ${animated ? "animated flash" : ""}`;

    return (
      <div className={wrapperClassName}>
        <strong className="inline-block text-lg italic mb-4">
          @{member.username}
        </strong>
      
        { owner && (
          <em className="opacity-50 float-right text-lg font-bold">This is you</em>
        )}

        <AvatarBadges {...member} />

        { this.renderAction() }
      </div>
    );
  }
}

export default Card;
