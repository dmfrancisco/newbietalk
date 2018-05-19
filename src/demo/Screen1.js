import React, { Component } from "react";
import { Subscribe } from "unstated";
import DemoContainer from "../containers/DemoContainer";
import AvatarBuilder from "../AvatarBuilder";
import PronounBuilder from "../PronounBuilder";
import LanguagesBuilder from "../LanguagesBuilder";

class Screen1 extends Component {
  render() {
    return (
      <Subscribe to={[DemoContainer]}>
        {profile => (
          <div className="p-6">
            <AvatarBuilder
              helpUrl="/help/avatar"
              avatarStyles={profile.state.avatarStyles}
              onChange={profile.setAvatarStyle}
            />

            <PronounBuilder
              helpUrl="/help/pronoun"
              value={profile.state.pronoun}
              onChange={profile.setPronoun}
            />

            <LanguagesBuilder
              helpUrl="/help/languages"
              onNameChange={profile.setLanguageName}
              onIconChange={profile.setLanguageIcon}
              value={profile.state.languages}
            />

            <div className="text-center my-8">
              <button
                onClick={this.props.showNext}
                className="Button bg-purple-lightest text-lg px-4 py-2"
              >
                Save profile
              </button>
            </div>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Screen1;
