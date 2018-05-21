import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import SessionContainer from "./containers/SessionContainer";
import AsksContainer from "./containers/AsksContainer";
import Header from "./Header";
import Card from "./Card";

class Home extends Component {
  getColor(index) {
    const colors = ["teal", "blue", "purple"];
    return colors[index % colors.length];
  }

  render() {
    return (
      <Subscribe to={[SessionContainer, AsksContainer]}>
        {(session, asks) => {
          const userAsk = asks.state.current[session.state.uid] || {};
          const helpers = Object.values(userAsk.helpers || {});
          const userIsAsking = Object.values(userAsk).length > 0;
          const currentAsks = Object.values(asks.state.current);

          return (
            <Fragment>
              <Header />

              <div className="px-6 mx-auto max-w-xl mb-8">
                {userIsAsking && (
                  <div className="mb-8">
                    <h4 className="text-lg italic mb-4">
                      Members offering help
                    </h4>

                    {helpers.map((helper, index) => {
                      return (
                        <Card
                          key={helper.uid}
                          color={this.getColor(index)}
                          member={session.state}
                          helper={helper}
                          onClick={() => asks.accept(session.state, helper)}
                          action="accept"
                          className="mr-2 mb-2 inline-block"
                          style={{ width: "18rem" }}
                        />
                      );
                    })}

                    {helpers.length === 0 && (
                      <p>Waiting for members to show up…</p>
                    )}
                  </div>
                )}

                {!userIsAsking && (
                  <div className="mb-8">
                    <h4 className="text-lg italic mb-4">Your profile</h4>

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
                      onClick={session.ask}
                      action="ask"
                      owner
                      className="mb-8"
                      style={{ width: "32rem" }}
                    />
                  </div>
                )}

                <h4 className="text-lg italic mb-6">Asking for help</h4>

                <div className="flex flex-wrap items-start">
                  {currentAsks.map(({ asker, helpers = {} }, index) => {
                    const userHelp = helpers[session.state.uid] || {};
                    const userIsHelping = Object.values(userHelp).length > 0;

                    if (asker.uid === session.state.uid) {
                      return (
                        <Card
                          key={session.state.uid}
                          member={session.state}
                          onClick={session.stopAsking}
                          action="asking"
                          owner
                          className="mr-2 mb-2 flex-none"
                          style={{ width: "25.5rem" }}
                        />
                      );
                    } else if (userIsHelping) {
                      return (
                        <Card
                          key={asker.uid}
                          color={this.getColor(index)}
                          member={asker}
                          helper={userHelp}
                          onClick={() =>
                            asks.stopOffer(asker.uid, session.state)
                          }
                          action="offering"
                          className="mr-2 mb-2 flex-none"
                          style={{ width: "25.5rem" }}
                        />
                      );
                    } else {
                      return (
                        <Card
                          key={asker.uid}
                          color={this.getColor(index)}
                          member={asker}
                          helper={session.state}
                          onClick={() => asks.offer(asker.uid, session.state)}
                          onReadCodeOfConductChange={e =>
                            session.updateProfile({
                              readCodeOfConduct: e.target.checked,
                            })
                          }
                          action="offer"
                          className="mr-2 mb-2 flex-none"
                          style={{ width: "25.5rem" }}
                        />
                      );
                    }
                  })}
                </div>

                {currentAsks.length === 0 && (
                  <p>It looks like nobody is asking for help at the moment.</p>
                )}
              </div>
            </Fragment>
          );
        }}
      </Subscribe>
    );
  }
}

export default Home;
