import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import Container from "./Container";
import Header from "./Header";
import Card from "../Card";

export default class extends Component {
  static defaultProps = {
    totalSteps: 3,
  };

  state = {
    stepIndex: 0,
  };

  showNext = () => {
    const { stepIndex } = this.state;
    const { totalSteps } = this.props;

    this.setState({
      stepIndex: Math.min(stepIndex + 1, totalSteps - 1),
    });
  };

  unschedule() {
    clearTimeout(this.timer);
  }

  scheduleNext() {
    const { stepIndex } = this.state;
    const { totalSteps } = this.props;

    this.unschedule();

    if (stepIndex < totalSteps - 1) {
      this.timer = setTimeout(this.showNext, 5000);
    }
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

  handleAccept(profile, helper) {
    profile.setHelper(helper, this.props.showNext);
  }

  renderProfile(profile) {
    return (
      <Fragment>
        <h4 className="text-lg italic mb-4">Your profile</h4>

        <Card member={profile.state} onClick={() => {}} action="asking" owner className="mb-6" />
      </Fragment>
    );
  }

  renderStep0(profile) {
    return (
      <Fragment>
        <div
          className="Box bg-purple-lightest px-6 py-4 leading-normal mb-8 animated flash"
          style={{ maxWidth: "80%" }}
        >
          Great! Let’s wait and see if someone’s available to help.
        </div>

        <h4 className="text-lg italic mb-6">Members offering help</h4>

        <p className="mb-8">Waiting for members to show up…</p>
      </Fragment>
    );
  }

  renderStep1(profile) {
    const member = profile.getHelperOptions()[0];

    return (
      <Fragment>
        <div
          className="Box bg-teal-lightest px-6 py-4 leading-normal mb-8 animated flash"
          style={{ maxWidth: "80%" }}
        >
          <strong>@{member.username}</strong> is available to help! Accept her help or wait to see
          if more members are available.
        </div>

        <h4 className="text-lg italic mb-6">Members offering help</h4>

        <div className="flex">
          <div className="w-1/2 mb-8 pr-2">
            <Card
              member={member}
              color={member.color}
              onClick={() => this.handleAccept(profile, member)}
              action="accept"
              className="pr-2"
              animated
            />
          </div>
        </div>
      </Fragment>
    );
  }

  renderStep2(profile) {
    const member1 = profile.getHelperOptions()[0];
    const member2 = profile.getHelperOptions()[1];

    return (
      <Fragment>
        <div
          className="Box bg-blue-lightest px-6 py-4 leading-normal mb-8 animated flash"
          style={{ maxWidth: "80%" }}
        >
          <strong>2 members</strong> are available to help! Accept their help or wait to see if more
          members are available.
        </div>

        <h4 className="text-lg italic mb-6">Members offering help</h4>

        <div className="flex">
          <div className="w-1/2 mb-8 pr-2">
            <Card
              member={member1}
              color={member1.color}
              onClick={() => this.handleAccept(profile, member1)}
              action="accept"
              className="pr-2"
            />
          </div>
          <div className="w-1/2 mb-8">
            <Card
              member={member2}
              color={member2.color}
              onClick={() => this.handleAccept(profile, member2)}
              action="accept"
              className="pr-2"
              animated
            />
          </div>
        </div>
      </Fragment>
    );
  }

  render() {
    const { stepIndex } = this.state;

    return (
      <Subscribe to={[Container]}>
        {profile => {
          let languages = profile.state.languages.filter(lang => lang.name);
          if (languages.length === 0) languages = [{ name: "English", icon: "🇺🇸" }];

          return (
            <div className="p-6 pt-4">
              <Header avatarStyles={profile.state.avatarStyles} />

              {stepIndex === 0 && this.renderStep0(profile)}
              {stepIndex === 1 && this.renderStep1(profile)}
              {stepIndex === 2 && this.renderStep2(profile)}

              <div style={{ maxWidth: "80%" }}>{this.renderProfile(profile)}</div>
            </div>
          );
        }}
      </Subscribe>
    );
  }
}
