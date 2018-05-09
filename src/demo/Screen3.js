import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import ProfileContainer from "./ProfileContainer";
import Header from "./Header";
import AvatarBadges from "./AvatarBadges";

const memberZaber = {
  name: "@zaberjs",
  color: "teal",
  thanked: 14,
  avatarStyles: {
    topType: "LongHairMiaWallace",
    hairColor: "Black",
    skinColor: "Brown",
    accessoriesType: "Round",
    eyeType: "Close",
    eyebrowType: "RaisedExcited",
  },
  pronoun: "She / Her",
  languages: [
    { name: "Portuguese", icon: "🇵🇹" },
    { name: "English", icon: "🇬🇧" },
    { name: "Tetun-prasa", icon: "🇹🇱" },
  ]
};

const memberDavid = {
  name: "@davidcodes",
  color: "blue",
  thanked: 6,
  avatarStyles: {
    topType: "LongHairStraight",
    hairColor: "BrownDark",
    facialHairType: "BeardLight",
    facialHairColor: "Brown",
    skinColor: "Light",
    eyebrowType: "RaisedExcited",
    mouthType: "Smile",
  },
  pronoun: "He / Him",
  languages: [
    { name: "Portuguese", icon: "🇵🇹" },
    { name: "English", icon: "🇬🇧" },
  ]
};

export default class extends Component {
  static defaultProps = {
    totalSteps: 3
  }

  state = {
    stepIndex: 1,
  };

  showNext = () => {
    const { stepIndex } = this.state;
    const { totalSteps } = this.props;

    this.setState({
      stepIndex: Math.min(stepIndex + 1, totalSteps - 1),
    });
  };

  scheduleNext() {
    const { stepIndex } = this.state;
    const { totalSteps } = this.props;

    clearTimeout(this.timer);
    
    if (stepIndex < totalSteps - 1) {
      this.timer = setTimeout(this.showNext, 6000);
    }
  }

  componentDidUpdate() {
    this.scheduleNext();
  }

  componentDidMount() {
    this.scheduleNext();
  }

  renderProfile(profile) {
    return (
      <Fragment>
        <h4 className="text-lg italic mb-4">Your profile</h4>

        <div className="bg-brown-lightest rounded-lg p-6 mb-6">
          <strong className="inline-block text-lg italic mb-4">@myusername</strong>

          <em className="opacity-50 float-right text-lg font-bold">This is you</em>

          <AvatarBadges {...profile.state} />

          <textarea
            className="block border-2 px-3 py-2 rounded w-full mb-4 bg-transparent text-black"
            readOnly
            disabled
            rows={3}
            value={profile.state.helpDescription}
            onChange={e => profile.setHelpDescription(e.target.value)}
          />

          <button className="Button Button--disabled text-lg italic" disabled>
            Asking for help…
          </button>

          <button className="Button text-lg bg-brown-light float-right">
            Stop asking
          </button>
        </div>
      </Fragment>
    )
  }

  renderStep0(profile) {
    return (
      <Fragment>
        <div className="Box bg-purple-lightest px-6 py-4 leading-normal mb-8 animated flash" style={{ maxWidth: "80%" }}>
          Great! Let’s wait and see if someone’s available to help.
        </div>

        <h4 className="text-lg italic mb-6">Members offering help</h4>

        <p className="mb-8">Waiting for members to show up…</p>
      </Fragment>
    )
  }

  renderMemberCard(member) {
    const className = `bg-${member.color}-lightest rounded-lg p-6 pr-2`;

    return (
      <div className={className}>
        <strong className="inline-block text-lg italic mb-4">{member.name}</strong>

        <AvatarBadges {...member} />

        <button className="Button text-lg bg-brown-light mt-4">
          Accept help
        </button>
      </div>
    );
  }

  renderStep1(profile) {
    return (
      <Fragment>
        <div className="Box bg-teal-lightest px-6 py-4 leading-normal mb-8 animated flash" style={{ maxWidth: "80%" }}>
          <strong>{memberZaber.name}</strong> is available to help! Accept her help or wait to see if more members are available.
        </div>

        <h4 className="text-lg italic mb-6">Members offering help</h4>

        <div className="flex">
          <div className="w-1/2 mb-8 pr-2">
            { this.renderMemberCard(memberZaber) }
          </div>
        </div>
      </Fragment>
    )
  }

  renderStep2(profile) {
    return (
      <Fragment>
        <div className="Box bg-blue-lightest px-6 py-4 leading-normal mb-8 animated flash" style={{ maxWidth: "80%" }}>
          <strong>2 members</strong> are available to help! Accept their help or wait to see if more members are available.
        </div>

        <h4 className="text-lg italic mb-6">Members offering help</h4>

        <div className="flex">
          <div className="w-1/2 mb-8 pr-2">
            { this.renderMemberCard(memberZaber) }
          </div>
          <div className="w-1/2 mb-8">
            { this.renderMemberCard(memberDavid) }
          </div>
        </div>
      </Fragment>
    )
  }

  render() {
    const { stepIndex } = this.state;

    return (
      <Subscribe to={[ProfileContainer]}>
        {profile => {
          let languages = profile.state.languages.filter(lang => lang.name);
          if (languages.length === 0) languages = [{ name: "English", icon: "🇺🇸" }];

          return (
            <div className="p-6 pt-4">
              <Header avatarStyles={profile.state.avatarStyles} />

              { stepIndex === 0 && this.renderStep0(profile) }
              { stepIndex === 1 && this.renderStep1(profile) }
              { stepIndex === 2 && this.renderStep2(profile) }

              <div style={{ maxWidth: "80%" }}>
                { this.renderProfile(profile) }
              </div>
            </div>
          );
        }}
      </Subscribe>
    );
  }
}
