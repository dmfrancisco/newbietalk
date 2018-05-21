import React from "react";
import { Subscribe } from "unstated";
import DemoContainer from "../containers/DemoContainer";
import Header from "./Header";
import Card from "../Card";

export default props => (
  <Subscribe to={[DemoContainer]}>
    {profile => (
      <div className="p-6 pt-4">
        <Header avatarStyles={profile.state.avatarStyles} />

        <div className="mb-6" style={{ maxWidth: "80%" }}>
          <div className="Box bg-blue-lightest px-6 py-4 leading-normal mb-8 animated flash">
            Congratulations! Your profile was successfully created. You can now
            either ask for help or wait and help others.
          </div>

          <h4 className="text-lg italic mb-4">Your profile</h4>

          <Card
            member={profile.state}
            onClick={props.showNext}
            onHelpDescriptionChange={e =>
              profile.setHelpDescription(e.target.value)
            }
            onReadCodeOfConductClick={() => {}}
            action="ask"
            owner
            validate={false}
          />
        </div>

        <h4 className="text-lg italic mb-6">Help others</h4>

        <p className="mb-6">
          It looks like nobody is asking for help at the moment.
        </p>
      </div>
    )}
  </Subscribe>
);
