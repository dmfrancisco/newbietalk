import React, { Component, Fragment } from "react";
import AvatarBadges from "./AvatarBadges";

class Card extends Component {
  renderAskHelp() {
    const {
      member,
      onClick,
      onHelpDescriptionChange,
      onReadCodeOfConductChange,
      validate = true,
    } = this.props;

    const helpDescription = member.helpDescription || "";
    const disabled =
      validate && (helpDescription.length === 0 || !member.readCodeOfConduct);
    const buttonClassName = `flex-none Button ${
      disabled ? "Button--disabled rounded-lg" : "bg-brown-light"
    }`;

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
            />{" "}
            I’ve read the Code of Conduct
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

        <button className="Button Button--disabled italic" disabled>
          Asking…
        </button>

        <button onClick={onClick} className="Button bg-brown-light float-right">
          Stop asking
        </button>
      </Fragment>
    );
  }

  renderAcceptHelp() {
    const { onClick, member } = this.props;

    if (member.chatKey) {
      return this.renderOpenChat(member.chatKey);
    }

    return (
      <button className="Button bg-brown-light mt-4" onClick={onClick}>
        Accept help
      </button>
    );
  }

  renderOfferHelp() {
    const {
      member,
      helper,
      onClick,
      onReadCodeOfConductChange = () => {},
    } = this.props;

    const disabled = !helper.readCodeOfConduct;
    const buttonClassName = `flex-none Button ${
      disabled ? "Button--disabled rounded-lg" : "bg-brown-light"
    }`;

    return (
      <Fragment>
        <textarea
          className="block border-2 px-3 py-2 rounded w-full mb-4 bg-transparent text-black"
          readOnly
          disabled
          rows={2}
          value={member.helpDescription}
        />

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
            />{" "}
            I’ve read the Code of Conduct
          </label>
        </div>
      </Fragment>
    );
  }

  renderOfferingHelp() {
    const { member, helper, onClick } = this.props;

    return (
      <Fragment>
        <textarea
          className="block border-2 px-3 py-2 rounded w-full mb-4 bg-transparent text-black"
          readOnly
          disabled
          rows={2}
          value={member.helpDescription}
        />

        {!helper.chatKey && (
          <Fragment>
            <button className="Button Button--disabled italic" disabled>
              Offering…
            </button>

            <button
              onClick={onClick}
              className="Button bg-brown-light float-right"
            >
              Stop offering
            </button>
          </Fragment>
        )}

        {helper.chatKey && this.renderOpenChat(helper.chatKey)}
      </Fragment>
    );
  }

  renderOpenChat(chatKey) {
    const chatUrl = `/app/chat/${chatKey}`;

    return (
      <a
        href={chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="Button bg-brown-light"
      >
        Open chat
      </a>
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
    const {
      member,
      color,
      animated = false,
      className = "",
      owner = false,
    } = this.props;

    const wrapperClassName = `bg-${
      owner ? "brown" : color
    }-lightest rounded-lg p-4 md:p-6 overflow-hidden ${className} ${
      animated ? "animated flash" : ""
    }`;

    return (
      <div className={wrapperClassName} style={{ maxWidth: "30rem" }}>
        <div className="h-8 overflow-hidden">
          <strong className="inline-block text-lg italic mb-4 mr-2">
            @{member.username}
          </strong>

          {owner && (
            <em className="opacity-50 float-right text-lg font-bold">
              This is you
            </em>
          )}
        </div>

        <AvatarBadges {...member} />

        {this.renderAction()}
      </div>
    );
  }
}

export default Card;
