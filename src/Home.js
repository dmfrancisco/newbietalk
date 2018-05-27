import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import SessionContainer from "./containers/SessionContainer";
import AsksContainer from "./containers/AsksContainer";
import Header from "./Header";
import Card from "./Card";
import Favico from "favico.js";

const sound1 = new Audio("sound-1.mp3");
const sound2 = new Audio("sound-2.mp3");

const favicon = new Favico({
  animation: "none",
  bgColor: "#4285f4",
});

window.addEventListener("focus", event => {
  favicon.reset();
});

class Home extends Component {
  state = {};

  static getDerivedStateFromProps(nextProps) {
    const { session, asks } = nextProps;
    const userUID = session.state.uid;
    const userAsk = asks.state.current[userUID] || {};

    const helpers = Object.values(userAsk.helpers || {});
    const askers = Object.values(asks.state.current || {});
    const accepted = askers.filter(
      ask => ask.helpers && (ask.helpers[userUID] || {}).chatKey
    );

    const stats = {
      helpers: helpers.length,
      askers: askers.length,
      accepted: accepted.length,
    };

    return { stats };
  }

  componentDidUpdate(prevProps, prevState) {
    const prevStats = prevState.stats;
    const { stats } = this.state;

    if (prevStats.askers < stats.askers) {
      sound1.play();
    }

    if (
      prevStats.helpers < stats.helpers ||
      prevStats.accepted < stats.accepted
    ) {
      sound2.play();
      favicon.badge(prevStats.helpers || prevStats.accepted);
    }
  }

  getColor(index) {
    const colors = ["purple", "teal", "blue"];
    return colors[index % colors.length];
  }

  ask = () => {
    const { session, history } = this.props;

    return session.ask().then(() => {
      const flash = "Great! Let’s wait and see if someone’s available to help.";
      history.push({ ...history.location, state: { flash } });
    });
  };

  offer = (...args) => {
    const { asks, history } = this.props;

    return asks.offer(...args).then(() => {
      const flash =
        "Thanks! If they don’t reply it may be because someone else's already helping.";
      history.push({ ...history.location, state: { flash } });
    });
  };

  renderProfile() {
    const { session } = this.props;

    return (
      <Fragment>
        <h4 className="text-lg italic mb-4">Your profile</h4>

        <div className="mb-8 flex">
          <Card
            member={session.state}
            onHelpDescriptionChange={e =>
              session.updateProfile({
                helpDescription: e.target.value,
              })
            }
            onReadCodeOfConductChange={e =>
              session.updateProfile({
                readCodeOfConduct: e.target.checked,
              })
            }
            onClick={this.ask}
            action="ask"
            owner
            className="w-full md:w-1/2 md:mr-2"
          />

          <div className="w-1/2 mr-2 bg-grey-lighter rounded-lg hidden md:block" />
        </div>
      </Fragment>
    );
  }

  renderOffering() {
    const { session, asks } = this.props;
    const userAsk = asks.state.current[session.state.uid] || {};
    const helpers = Object.values(userAsk.helpers || {});

    return (
      <div className="mb-8">
        <h4 className="text-lg italic mb-4">Members offering help</h4>

        <div className="flex flex-wrap">
          {helpers.map((helper, index) => {
            return (
              <div
                key={helper.uid}
                className="w-full mb-2 md:w-1/2 md:pr-2 lg:w-1/3"
              >
                <Card
                  color={this.getColor(index)}
                  member={helper}
                  onClick={() => asks.accept(session.state, helper)}
                  action="accept"
                  className="w-full h-full"
                />
              </div>
            );
          })}

          {this.renderPlaceholders(3 - helpers.length % 3)}
        </div>

        {helpers.length === 0 && <p>Waiting for members to show up…</p>}
      </div>
    );
  }

  renderAsking() {
    const { session, asks } = this.props;
    const currentUser = session.state;
    const currentAsks = Object.values(asks.state.current).sort(
      // Show the current user's ask first
      ({ asker }) => (asker.uid === currentUser.uid ? -1 : 1)
    );

    return (
      <Fragment>
        <h4 className="text-lg italic mb-6">Asking for help</h4>

        <div className="flex flex-wrap">
          {currentAsks.map(({ asker, helpers = {} }, index) => {
            const userHelp = helpers[currentUser.uid] || {};
            const userIsHelping = Object.values(userHelp).length > 0;
            let props = {};

            if (asker.uid === currentUser.uid) {
              props = {
                member: currentUser,
                onClick: session.stopAsking,
                action: "asking",
                owner: true,
              };
            } else if (userIsHelping) {
              props = {
                member: asker,
                helper: userHelp,
                onClick: () => asks.stopOffer(asker.uid, currentUser),
                action: "offering",
              };
            } else {
              props = {
                member: asker,
                helper: currentUser,
                onClick: () => this.offer(asker.uid, currentUser),
                onReadCodeOfConductChange: e =>
                  session.updateProfile({
                    readCodeOfConduct: e.target.checked,
                  }),
                action: "offer",
              };
            }

            return (
              <div
                key={asker.uid}
                className="w-full mb-2 md:w-1/2 md:pr-2 lg:w-1/3"
              >
                <Card
                  className="w-full h-full"
                  color={this.getColor(index)}
                  {...props}
                />
              </div>
            );
          })}

          {currentAsks.length > 0 &&
            this.renderPlaceholders(3 - currentAsks.length % 3)}
        </div>

        {currentAsks.length === 0 && (
          <p>It looks like nobody is asking for help at the moment.</p>
        )}
      </Fragment>
    );
  }

  renderPlaceholders(length) {
    return [...Array(length)].map((el, index) => (
      <div
        key={`placeholder-${index}`}
        className="w-full mb-2 md:w-1/2 md:pr-2 lg:w-1/3 hidden md:block"
      >
        <div className="w-full h-full bg-grey-lighter rounded-lg" />
      </div>
    ));
  }

  render() {
    const { session, asks } = this.props;
    const userAsk = asks.state.current[session.state.uid] || {};
    const userIsAsking = Object.values(userAsk).length > 0;

    return (
      <Fragment>
        <Header />

        <div className="container max-w-xl mb-8">
          {userIsAsking && this.renderOffering()}
          {!userIsAsking && this.renderProfile()}
          {this.renderAsking()}
        </div>
      </Fragment>
    );
  }
}

export default props => (
  <Subscribe to={[SessionContainer, AsksContainer]}>
    {(session, asks) => <Home {...props} session={session} asks={asks} />}
  </Subscribe>
);
