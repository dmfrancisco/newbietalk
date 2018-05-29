import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import { Helmet } from "react-helmet";
import Header from "./Header";
import SessionContainer from "./containers/SessionContainer";
import AvatarBuilder from "./AvatarBuilder";
import PronounBuilder from "./PronounBuilder";
import LanguagesBuilder from "./LanguagesBuilder";

const usernameRegex = /^[a-z\d_]{0,38}$/i;

class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = props.session.state;
  }

  setUsername = e => {
    const username = e.target.value;
    this.setState({ username });
  };

  setAvatarStyle = (name, value) => {
    const initial = this.state.avatarStyles || {};
    const avatarStyles = { ...initial };
    avatarStyles[name] = value;
    this.setState({ avatarStyles });
  };

  setPronoun = pronoun => {
    this.setState({ pronoun });
  };

  setLanguageName = (index, name) => {
    const initial = this.state.languages || [];
    const languages = [...initial];
    if (!languages[index]) languages[index] = { icon: "waving_white_flag" };
    languages[index].name = name;
    this.setState({ languages });
  };

  setLanguageIcon = (index, icon) => {
    const initial = this.state.languages || [];
    const languages = [...initial];
    if (!languages[index]) languages[index] = { name: "" };
    languages[index].icon = icon;
    this.setState({ languages });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { history, session } = this.props;

    session
      .updateProfile(this.state)
      .then(() => {
        history.push("/app", {
          flash: "Profile saved! You can ask for help or help others.",
        });
      })
      .catch(error => {
        console.error(error);

        const { username, languages = [] } = this.state;
        let flash = "We are sorry, an error has occurred";

        if (username.length === 0) {
          flash = "Please provide a username";
        } else if (!usernameRegex.test(username)) {
          flash = "Your username should only use letters, numbers and '_'";
        } else if (languages.filter(l => l.name.length > 0).length === 0) {
          flash = "Please provide at least one language name";
        }

        history.push({ ...history.location, state: { flash } });
      });
  };

  render() {
    const style = { maxWidth: "28rem" };

    return (
      <Fragment>
        <Helmet>
          <title>Edit profile</title>
        </Helmet>

        <Header />

        <form className="container max-w-xl" onSubmit={this.handleSubmit}>
          <div
            className="mx-auto rounded-lg bg-blue-lightest p-6 mb-6"
            style={style}
          >
            <h4 className="text-lg italic text-center mb-4 tracking-none">
              Pick your username
            </h4>

            <input
              type="text"
              className="block mx-auto border-2 px-3 py-2 h-10 rounded m-1"
              value={this.state.username}
              onChange={this.setUsername}
            />
          </div>

          <AvatarBuilder
            helpUrl="/app/profile/help/avatar"
            avatarStyles={this.state.avatarStyles}
            onChange={this.setAvatarStyle}
            style={style}
          />

          <PronounBuilder
            helpUrl="/app/profile/help/pronoun"
            value={this.state.pronoun}
            onChange={this.setPronoun}
            style={style}
          />

          <LanguagesBuilder
            helpUrl="/app/profile/help/languages"
            value={this.state.languages}
            onNameChange={this.setLanguageName}
            onIconChange={this.setLanguageIcon}
            style={style}
          />

          <button className="Button bg-brown-lighter text-lg px-4 py-3 block mt-8 mb-18 mx-auto">
            Save profile
          </button>
        </form>
      </Fragment>
    );
  }
}

export default props => (
  <Subscribe to={[SessionContainer]}>
    {session => <ProfileSettings {...props} session={session} />}
  </Subscribe>
);
