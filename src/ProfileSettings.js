import React, { Component } from "react";
import { Subscribe } from "unstated";
import SessionContainer from "./SessionContainer";
import AvatarBuilder from "./AvatarBuilder";

class ProfileSettings extends Component {
  render() {
    return (
      <Subscribe to={[SessionContainer]}>
        {session => (
          <div className="">
            Profile Settings
      
            <input 
              type="text"
              onChange={(e) => session.setUsername(e.target.value)}
              value={session.state.username}
            />

            <AvatarBuilder
              helpUrl="/help/avatar"
              avatarStyles={session.state.avatarStyles}
              onChange={session.setAvatarStyle}
            />
          </div>
        )}
      </Subscribe>
    );
  }
}

export default ProfileSettings;
