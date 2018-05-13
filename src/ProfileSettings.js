import React, { Component } from "react";
import { Subscribe } from "unstated";
import deepmerge from 'deepmerge';
import SessionContainer from "./SessionContainer";
import AvatarBuilder from "./AvatarBuilder";
import PronounBuilder from "./PronounBuilder";
import LanguagesBuilder from "./LanguagesBuilder";

const usernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

class ProfileSettings extends Component {
  state = {}

  setUsername = (e) => {
    const username = e.target.value;
    this.setState({ username });
  }

  setAvatarStyle = (name, value) => {
    const initial = this.state.avatarStyles || {};
    const avatarStyles = { ...initial };
    avatarStyles[name] = value;
    this.setState({ avatarStyles });
  }

  setPronoun = (pronoun) => {
    this.setState({ pronoun });
  }

  setLanguageName = (index, name) => {
    const initial = this.state.languages || [];
    const languages = [...initial];
    if (!languages[index]) languages[index] = { icon: '🏳️' };
    languages[index].name = name;
    this.setState({ languages });
  }

  setLanguageIcon = (index, icon) => {
    const initial = this.state.languages || [];
    const languages = [...initial];
    if (!languages[index]) languages[index] = { name: '' };
    languages[index].icon = icon;
    this.setState({ languages });
  }
  
  handleSubmit = (e, session, state) => {
    e.preventDefault();
    
    const { history } = this.props;
    
    session
      .updateProfile(state)
      .then(() => {
        history.push('/app', { 
          flash: "Profile saved!"
        });
      })
      .catch(() => {
        const { username, languages = [] } = state;
        let flash = "We are sorry, an error has occurred";

        if (languages.filter((l) => l.name.length > 0).length === 0) {
          flash = "Please provide at least one language name";
        } else if (username.length === 0) {
          flash = "Please provide a username";
        } else if (!usernameRegex.test(username)) {
          flash = "Your username should only use letters, numbers and '_'";           
        }

        const urlState = { ...history.location.state, flash };
        history.push({ ...history.location, state: urlState });
      });
  }

  render() {
    return (
      <Subscribe to={[SessionContainer]}>
        {session => {
          const state = deepmerge(session.state, this.state, {
            arrayMerge: (a, b) => [0,1,2].map((i) => ({ ...a[i], ...b[i] }))
          });

          return (
            <form 
              className="p-6 mx-auto max-w-md" 
              onSubmit={(e) => this.handleSubmit(e, session, state)}
            >
              <input 
                type="text"
                value={state.username}
                onChange={this.setUsername}
              />

              <AvatarBuilder
                helpUrl="/app/profile/help/avatar"
                avatarStyles={state.avatarStyles}
                onChange={this.setAvatarStyle}
              />

              <PronounBuilder
                helpUrl="/app/profile/help/pronoun"
                value={state.pronoun}
                onChange={this.setPronoun}
              />

              <LanguagesBuilder
                helpUrl="/app/profile/help/languages"
                value={state.languages}
                onNameChange={this.setLanguageName}
                onIconChange={this.setLanguageIcon}
              />
            
              <button>Save profile</button>
            </form>
          );
        }}
      </Subscribe>
    );
  }
}

export default ProfileSettings;
