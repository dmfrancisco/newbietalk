import React, { Component, Fragment } from "react";
import AvatarBadges from "./AvatarBadges";

class Card extends Component {
  renderAskHelp() {
    const { member, onClick, onHelpDescriptionChange, onReadCodeOfConductChange, validate = true } = this.props;
    const helpDescription = member.helpDescription || "";
    const disabled = validate && (helpDescription.length === 0 || !member.readCodeOfConduct);
    const buttonClassName = `flex-none Button text-lg ${ disabled ? 'Button--disabled rounded-lg' : 'bg-brown-light' }`;

    return (
      <Fragment>
        <textarea
          className="block border-2 px-3 py-2 rounded w-full mb-4"
          placeholder="I need help with…"
          rows={2}
          defaultValue={helpDescription}
          onChange={onHelpDescriptionChange}
        />

        <div className="flex items-center">
          <button
            onClick={onClick}
            className={buttonClassName}
            disabled={disabled}
          >
            Ask for help
          </button>

          <label className="select-none ml-4">
            <input 
              type="checkbox"
              className="mr-1"
              checked={member.readCodeOfConduct}
              onChange={onReadCodeOfConductChange}
            /> I’ve read the Code of Conduct
          </label>
        </div>
      </Fragment>
    );
  }

  renderAskingHelp() {
    const { member, helper = {}, onClick, owner = false, onReadCodeOfConductChange = () => {} } = this.props;
    const disabled = !helper.readCodeOfConduct;
    const buttonClassName = `flex-none Button text-lg ${ 
      disabled ? 'Button--disabled rounded-lg' : 'bg-brown-light' }`;

    return (
      <Fragment>
        <textarea
          className="block border-2 px-3 py-2 rounded w-full mb-4 bg-transparent text-black"
          readOnly
          disabled
          rows={2}
          value={member.helpDescription}
        />

        { owner && (
          <Fragment>
            <button className="Button Button--disabled text-lg italic" disabled>
              Asking for help
            </button>

            <button
              onClick={onClick}
              className="Button text-lg bg-brown-light float-right"
            >
              Stop asking
            </button>
          </Fragment>
        )}

        { !owner && (
          <div className="flex items-center">
            <button
              onClick={onClick}
              className={buttonClassName}
              disabled={disabled}
            >
              Offer help
            </button>

            <label className="select-none ml-4">
              <input 
                type="checkbox"
                className="mr-1"
                checked={helper.readCodeOfConduct}
                onChange={onReadCodeOfConductChange}
              /> I’ve read the <br/> Code of Conduct
            </label>
          </div>
        )} 
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
    const { member, color = "brown", animated = false, className = "", owner = false, style = {} } = this.props;
    const wrapperClassName = `bg-${color}-lightest rounded-lg p-6 ${className} ${animated ? "animated flash" : ""}`;

    return (
      <div className={wrapperClassName} style={style}>
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
