import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import Textarea from "react-autosize-textarea";
import SessionContainer from "./containers/SessionContainer";
import Header from "./Header";
import Avatar from "./Avatar";
import firebase from "./firebase";

const database = firebase.database();

class Chat extends Component {
  state = {};
  container = document.documentElement || document.body.parentNode || document.body;

  scrollToBottom = () => {
    const scrollHeight = this.container.scrollHeight;
    const height = this.container.clientHeight;
    const maxScrollTop = scrollHeight - height;

    this.container.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  componentWillUpdate() {
    const scrollPos = this.container.scrollTop;
    const scrollBottom = this.container.scrollHeight - this.container.clientHeight;

    this.scrollAtBottom = scrollBottom <= 0 || scrollPos === scrollBottom;
  }

  componentDidUpdate() {
    if (this.scrollAtBottom) {
      this.scrollToBottom();
    }
  }

  // Get all the existing chat data from Firebase and save it to state
  fetchState() {
    const { uid } = this.props.match.params;

    database.ref(`chats/${uid}`).once("value", data => {
      const state = data.val();
      const messages = Object.values(state.messages || {});
      this.setState({ ...state, messages });
    });
  }

  // Subscribe to new chat messages and save them to state
  subscribe() {
    const { uid } = this.props.match.params;

    database
      .ref(`chats/${uid}/messages`)
      .orderByChild("timestamp") // Only trigger for new data. See gist.github.com/6383103
      .startAt(Date.now())
      .on("child_added", data => {
        const { messages = [] } = this.state;
        const message = data.val();

        this.setState({ messages: [...messages, message] });
      });
  }

  componentDidMount() {
    this.fetchState();
    this.subscribe();
  }

  sendMessage = (author, value, options = {}) => {
    const { uid } = this.props.match.params;
    const timestamp = +new Date();
    const messageRef = database.ref(`chats/${uid}/messages`).push();

    messageRef.set({ value, timestamp, author, ...options });
  };

  handleSubmit = (session, e) => {
    e.preventDefault();

    const author = session.state.uid;
    const value = this.textarea.value;
    if (value === "") return;

    this.sendMessage(author, value);
    this.textarea.value = "";
  };

  handleKeyDown = (session, e) => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) this.handleSubmit(session, e);
      else this.scrollToBottom();
    }
  };

  handleSuggestVideo = session => {
    this.sendMessage(session.state.uid, `Suggested a video chat`, {
      auto: "suggested-video",
    });
  };

  handleAcceptVideo = session => {
    this.sendMessage(session.state.uid, "Yes, let's video chat!", {
      auto: "accepted-video",
    });
  };

  handleDeclineVideo = session => {
    this.sendMessage(session.state.uid, "Sorry I can't!", {
      auto: "declined-video",
    });
  };

  handlePressGoodbye = session => {
    this.sendMessage(session.state.uid, "Goodbye!", {
      auto: "pressed-goodbye",
    });
  };

  handleThankGoodbye = session => {
    this.sendMessage(session.state.uid, "Bye, thank you!", {
      auto: "reply-goodbye",
    });
  };

  handleReplyGoodbye = session => {
    this.sendMessage(session.state.uid, "Bye, thank you!", {
      auto: "reply-goodbye",
    });
  };

  renderVideoLink() {
    const { uid } = this.props.match.params;
    const videoLink = `https://appear.in/smalltalk-${uid}`;

    return (
      <div className="Message">
        <div className="Message-bubble Message-bubble--system">
          Alright! You can use this link or a different software if you prefer:{" "}
          <a target="_blank" rel="noopener noreferrer" href={videoLink} className="text-inherit">
            {videoLink}
          </a>
        </div>
      </div>
    );
  }

  renderMessages(session) {
    let { asker, helper, messages = [] } = this.state;
    let currentAuthorUID = null;

    // Use latest personal data for the currently logged user
    // We don't update for the other part to avoid confusion
    if (session.state.uid === asker.uid) {
      asker = session.state;
    } else {
      helper = session.state;
    }

    return messages.map(message => {
      const author = message.author === asker.uid ? asker : helper;
      const isMyMessage = author.uid === session.state.uid;
      let avatar = null;

      if (currentAuthorUID !== message.author) {
        currentAuthorUID = message.author;

        avatar = (
          <div className="Message-author">
            <Avatar {...author.avatarStyles} size="4rem" />
          </div>
        );
      }

      if (message.auto === "accepted-video") {
        currentAuthorUID = null;
      }

      return (
        <Fragment key={message.timestamp}>
          <div className={`Message${isMyMessage ? " Message--me" : ""}`}>
            {avatar}
            <div className={`Message-bubble ${message.auto ? "Message-bubble--auto" : ""}`}>
              {message.value}
            </div>
          </div>
          {message.auto === "accepted-video" && this.renderVideoLink()}
        </Fragment>
      );
    });
  }

  renderVideoChatActions(session, message) {
    const { asker, helper } = this.state;
    const author = message.author === asker.uid ? asker : helper;

    return (
      <Fragment>
        <div className="Message-form-textarea pb-15">
          <p className="mb-2 leading-normal">
            @{author.username} suggested a video chat. If you are too shy, are in a public place or
            don’t have the hardware, click “Sorry I can’t”.
          </p>
        </div>

        <div className="Message-form-actions">
          <button
            className="Button border-none bg-teal-lightest py-2 px-3 mr-2 rounded tracking-normal"
            onClick={e => this.handleAcceptVideo(session, e)}
          >
            Yes, let's video chat!
          </button>

          <button
            className="Button border-none bg-teal-lightest py-2 px-3 mr-2 rounded tracking-normal"
            onClick={e => this.handleDeclineVideo(session, e)}
          >
            Sorry, I can't!
          </button>
        </div>
      </Fragment>
    );
  }

  renderGoodbyeActions(session, message) {
    const { asker, helper } = this.state;
    const author = message.author === asker.uid ? asker : helper;

    return (
      <Fragment>
        <div className="Message-form-textarea pb-15">
          <p className="mb-2 leading-normal">
            @{author.username} pressed goodbye! If {author.pronoun.split(" ")[0].toLowerCase()}{" "}
            helped you in any way, be sure to thank {author.pronoun.split(" ")[2].toLowerCase()}.
          </p>
        </div>

        <div className="Message-form-actions">
          <button
            className="Button border-none bg-teal-lightest py-2 px-3 mr-2 rounded tracking-normal"
            onClick={e => this.handleThankGoodbye(session, e)}
          >
            Bye, thank you!
          </button>

          <button
            className="Button border-none bg-teal-lightest py-2 px-3 mr-2 rounded tracking-normal"
            onClick={e => this.handleReplyGoodbye(session, e)}
          >
            Bye, see ya!
          </button>
        </div>
      </Fragment>
    );
  }

  renderDefaultActions(session, videoChatSuggested, pressedGoodbye) {
    const hasActions = !videoChatSuggested || !pressedGoodbye;

    return (
      <Fragment>
        <form onSubmit={e => this.handleSubmit(session, e)}>
          <Textarea
            innerRef={node => (this.textarea = node)}
            onKeyDown={e => this.handleKeyDown(session, e)}
            placeholder="Type a message…"
            className={`Message-form-textarea${hasActions ? "" : " pb-4"}`}
            rows={3}
          />
        </form>

        {hasActions && (
          <div className="Message-form-actions">
            <div className="mb-2 text-grey">Or pick one of these actions:</div>

            {!videoChatSuggested && (
              <button
                className="Button border-none bg-brown-light py-2 px-3 mr-2 rounded text-sm tracking-normal"
                onClick={e => this.handleSuggestVideo(session, e)}
              >
                Suggest a video chat
              </button>
            )}

            {!pressedGoodbye && (
              <button
                className="Button border-none bg-brown-light py-2 px-3 mr-2 rounded text-sm tracking-normal"
                onClick={e => this.handlePressGoodbye(session, e)}
              >
                Say goodbye
              </button>
            )}
          </div>
        )}
      </Fragment>
    );
  }

  renderActions(session) {
    const currentUser = session.state;
    const { messages = [] } = this.state;

    const videoChatSuggestion = messages.find(message => message.auto === "suggested-video");
    const videoChatReply = messages.find(
      message => message.auto === "accepted-video" || message.auto === "declined-video"
    );

    if (!videoChatReply && videoChatSuggestion && videoChatSuggestion.author !== currentUser.uid) {
      return this.renderVideoChatActions(session, videoChatSuggestion);
    }

    const goodbyeMessage = messages.find(message => message.auto === "pressed-goodbye");
    const goodbyeReply = messages.find(message => message.auto === "replied-goodbye");

    if (!goodbyeReply && goodbyeMessage) {
      return this.renderGoodbyeActions(session, goodbyeMessage);
    }

    return this.renderDefaultActions(session, !!videoChatSuggestion, !!goodbyeMessage);
  }

  renderForm(session) {
    return (
      <div className="Message Message--me mt-8">
        <div className="Message-author">
          <Avatar {...session.state.avatarStyles} size="4rem" />
        </div>

        <div className="Message-form">{this.renderActions(session)}</div>
      </div>
    );
  }

  render() {
    const { asker, helper } = this.state;
    if (!asker || !helper) return null;

    return (
      <Subscribe to={[SessionContainer]}>
        {session => (
          <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex-1" />

            <div className="p-6 mx-auto w-full max-w-md mb-8">
              {this.renderMessages(session)}
              {this.renderForm(session)}
            </div>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Chat;
