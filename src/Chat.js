import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import SessionContainer from "./SessionContainer";
import Header from "./Header";
import Avatar from "./Avatar";
import firebase from "./firebase";

const database = firebase.database();

class Chat extends Component {
  state = {};

  componentDidMount() {
    const { uid } = this.props.match.params;

    database.ref(`chats/${uid}`).on("value", state => {
      this.setState(state.val());
    });
  }

  render() {
    const { asker, helper } = this.state;

    return (
      <Subscribe to={[SessionContainer]}>
        {session => {
          if (!asker || !helper) return null;

          return (
            <Fragment>
              <Header />

              <div className="p-6">
                <div className="Message">
                  <div className="Message-author">
                    <Avatar {...helper.avatarStyles} size="4rem" />
                  </div>

                  <div className="Message-bubble">Hello, World!</div>
                </div>

                <div className="Message Message--me">
                  <div className="Message-author">
                    <Avatar {...asker.avatarStyles} size="4rem" />
                  </div>

                  <div className="Message-bubble">Foo bar!</div>
                </div>
              </div>
            </Fragment>
          );
        }}
      </Subscribe>
    );
  }
}

export default Chat;
