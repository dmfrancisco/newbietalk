import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import SessionContainer from "./SessionContainer";
import AsksContainer from "./AsksContainer";
import Header from "./Header";
import Card from "./Card";

class Home extends Component {
  getColor(index) {
    const colors = ['teal', 'blue', 'purple'];
    return colors[index % colors.length];
  };

  render() {
    return (
      <Subscribe to={[SessionContainer, AsksContainer]}>
        {(session, asks) => {
          const userIsAsking = !!asks.state.current[session.state.uid];
          const currentAsks = Object.values(asks.state.current);

          return (
            <Fragment>
              <Header />

              <div className="px-6 mx-auto max-w-xl mb-8">
                { !userIsAsking && (
                  <Fragment>
                    <h4 className="text-lg italic mb-4">Your profile</h4>
                    
                    <Card
                      member={session.state}
                      onHelpDescriptionChange={(e) => 
                        session.updateProfile({ helpDescription: e.target.value })}
                      onReadCodeOfConductChange={(e) => 
                        session.updateProfile({ readCodeOfConduct: e.target.checked }) }
                      onClick={session.ask}
                      action="ask"
                      owner
                      className="mb-8"
                      style={{ width: '32rem' }}
                    />
                  </Fragment>
                )}

                <h4 className="text-lg italic mb-6">Asking for help</h4>

                { currentAsks.map(({ asker }, index) => {
                  if (asker.uid === session.state.uid) {
                    return (
                      <Card
                        key={session.state.uid}
                        member={session.state}
                        onClick={session.stopAsking}
                        action="asking"
                        owner
                        className="mr-2 mb-2 inline-block"
                        style={{ width: '24.5rem' }}
                      />
                    )
                  } else {
                    return (
                      <Card
                        key={asker.uid}
                        color={this.getColor(index)}
                        member={asker}
                        helper={session.state}
                        onClick={() => {}}
                        onReadCodeOfConductChange={(e) => 
                          session.updateProfile({ readCodeOfConduct: e.target.checked }) }
                        action="asking"
                        className="mr-2 mb-2 inline-block"
                        style={{ width: '24.5rem' }}
                      />
                    )
                  }
                })}

                { currentAsks.length === 0 && (
                  <p>It looks like nobody is asking for help at the moment.</p>
                )}
              </div>
            </Fragment>
          )
        }}
      </Subscribe>
    );
  }
}

export default Home;
