import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import SessionContainer from "./SessionContainer";
import Header from "./Header";
import Card from "./Card";

class Home extends Component {
  render() {
    return (
      <Subscribe to={[SessionContainer]}>
        {session => {
          return (
            <Fragment>
              <Header />

              <div className="px-6 mx-auto max-w-xl">
                <h4 className="text-lg italic mb-4">Your profile</h4>
      
                <Card
                  member={session.state}
                  onHelpDescriptionChange={(e) => session.updateProfile({ helpDescription: e.target.value })}
                  onReadCodeOfConductChange={(e) => session.updateProfile({ readCodeOfConduct: e.target.checked }) }
                  onClick={() => {}}
                  action="ask"
                  owner
                  className="mb-8"
                  style={{ maxWidth: '32rem' }}
                />

                <h4 className="text-lg italic mb-6">Help others</h4>

                <p className="mb-6">It looks like nobody is asking for help at the moment.</p>
              </div>
            </Fragment>
          )
        }}
      </Subscribe>
    );
  }
}

export default Home;
