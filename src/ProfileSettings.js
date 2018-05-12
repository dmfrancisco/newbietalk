import React, { Component } from "react";
import { Subscribe } from "unstated";
import SessionContainer from "./SessionContainer";
import AvatarBuilder from "./AvatarBuilder";
import PronounBuilder from "./PronounBuilder";
import LanguagesBuilder from "./LanguagesBuilder";

class ProfileSettings extends Component {
  render() {
    return (
      <Subscribe to={[SessionContainer]}>
        {session => (
          <div className="p-6 mx-auto max-w-md">
            Profile Settings
      
            <input 
              type="text"
              onChange={(e) => session.setUsername(e.target.value)}
              value={session.state.username}
            />

            <AvatarBuilder
              helpUrl="/app/profile/help/avatar"
              avatarStyles={session.state.avatarStyles}
              onChange={session.setAvatarStyle}
            />

            <PronounBuilder
              helpUrl="/app/profile/help/pronoun"
              value={session.state.pronoun}
              onChange={session.setPronoun}
            />

            <LanguagesBuilder
              helpUrl="/app/profile/help/languages"
              onNameChange={session.setLanguageName}
              onIconChange={session.setLanguageIcon}
              value={session.state.languages}
            />
          </div>
        )}
      </Subscribe>
    );
  }
}

export default ProfileSettings;
