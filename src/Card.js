import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import AvatarBadges from "./AvatarBadges";

class Card extends Component {
  renderAskHelp() {
    const { member, onHelpDescriptionChange, validate = true } = this.props;
    const helpDescription = member.helpDescription || "";
    let disabled = true;
    let onClick = this.props.onClick;

    if (validate && helpDescription.length === 0) {
      onClick = this.showDescriptionFlash;
    } else if (validate && !member.readCodeOfConduct) {
      onClick = this.showCoCFlash;
    } else {
      disabled = false;
    }

    const buttonClassName = `flex-none Button ${
      disabled ? "Button--disabled rounded-lg cursor-pointer" : "bg-brown-light"
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
          <button onClick={onClick} className={buttonClassName}>
            Ask for help
          </button>

          {this.renderCoC(member)}
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
          rows={2}
          defaultValue={member.helpDescription}
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
      <button className="Button bg-brown-light" onClick={onClick}>
        Accept help
      </button>
    );
  }

  renderOfferHelp() {
    const { member, helper, onClick } = this.props;

    const disabled = !helper.readCodeOfConduct;
    const buttonClassName = `flex-none Button ${
      disabled ? "Button--disabled rounded-lg cursor-pointer" : "bg-brown-light"
    }`;

    return (
      <Fragment>
        <textarea
          className="block border-2 px-3 py-2 rounded w-full mb-4 bg-transparent text-black"
          readOnly
          rows={2}
          defaultValue={member.helpDescription}
        />

        <div className="flex items-center">
          <button
            onClick={disabled ? this.showCoCFlash : onClick}
            className={buttonClassName}
          >
            Offer help
          </button>

          {this.renderCoC(helper)}
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
          rows={2}
          defaultValue={member.helpDescription}
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
      <a href={chatUrl} target={chatKey} className="Button bg-yellow-lightest">
        Open chat
      </a>
    );
  }

  renderCoC(user) {
    const { onReadCodeOfConductChange = () => {} } = this.props;

    return (
      <label className="select-none ml-4">
        <input
          type="checkbox"
          className="mr-1"
          checked={user.readCodeOfConduct}
          onChange={onReadCodeOfConductChange}
        />{" "}
        I’ve read the{" "}
        <Link
          to="/code-of-conduct"
          target="_blank"
          rel="noopener noreferrer"
          className="text-inherit"
        >
          Code of Conduct
        </Link>
      </label>
    );
  }

  showCoCFlash = () => {
    return this.showFlash("Please make sure you read the Code of Conduct!");
  };

  showDescriptionFlash = () => {
    return this.showFlash("Please make sure you describe your problem!");
  };

  showFlash = (flash, flashType = "error") => {
    const { history } = this.props;
    history.push({ ...history.location, state: { flash, flashType } });
  };

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

export default withRouter(Card);
