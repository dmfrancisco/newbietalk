import React, { Component, Fragment } from "react";
import { Subscribe } from "unstated";
import Textarea from "react-autosize-textarea";
import SessionContainer from "./containers/SessionContainer";
import Header from "./Header";
import Avatar from "./Avatar";
import FeedbackBuilder from "./FeedbackBuilder";
import firebase from "./firebase";

const database = firebase.database();

class Chat extends Component {
  state = {};
  container = document.documentElement ||
  document.body.parentNode ||
  document.body;

  scrollToBottom = () => {
    const scrollHeight = this.container.scrollHeight;
    const height = this.container.clientHeight;
    const maxScrollTop = scrollHeight - height;

    this.container.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  componentWillUpdate() {
    const scrollPos = this.container.scrollTop;
    const scrollBottom =
      this.container.scrollHeight - this.container.clientHeight;

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
    const timestamp = firebase.database.ServerValue.TIMESTAMP;
    const messageRef = database.ref(`chats/${uid}/messages`).push();

    messageRef.set({ value, timestamp, author, ...options });
  };

  thank = callback => {
    const { helper } = this.state;

    database.ref(`users/${helper.uid}`).once("value", data => {
      const { thanked } = data.val();

      database
        .ref(`users/${helper.uid}`)
        .update({ thanked: thanked + 1 })
        .then(callback);
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { session } = this.props;
    const author = session.state.uid;
    const value = this.textarea.value;
    if (value === "") return;

    this.sendMessage(author, value);
    this.textarea.value = "";
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) this.handleSubmit(e);
      else this.scrollToBottom();
    }
  };

  handleSuggestVideo = () => {
    this.sendMessage(this.props.session.state.uid, `Suggested a video chat`, {
      auto: "suggested-video",
    });
  };

  handleAcceptVideo = () => {
    this.sendMessage(this.props.session.state.uid, "Yes, let's video chat!", {
      auto: "accepted-video",
    });
  };

  handleDeclineVideo = () => {
    this.sendMessage(this.props.session.state.uid, "Sorry I can't!", {
      auto: "declined-video",
    });
  };

  handlePressGoodbye = () => {
    this.sendMessage(this.props.session.state.uid, "Goodbye!", {
      auto: "pressed-goodbye",
    });
  };

  handleThankGoodbye = () => {
    this.thank(() =>
      this.sendMessage(this.props.session.state.uid, "Bye, thank you!", {
        auto: "replied-goodbye",
      })
    );
  };

  handleReplyGoodbye = () => {
    this.sendMessage(this.props.session.state.uid, "Bye, thank you!", {
      auto: "replied-goodbye",
    });
  };

  handleFeedback = (rating, author, about) => {
    database
      .ref(`feedback/${about.uid}`)
      .push()
      .set(rating);

    this.sendMessage(this.props.session.state.uid, null, {
      auto: "feedback",
    });
  };

  renderVideoLink() {
    const { uid } = this.props.match.params;
    const videoLink = `https://appear.in/smalltalk-${uid}`;

    return (
      <div className="Message">
        <div className="Message-bubble Message-bubble--system">
          Alright! You can use this link or a different software if you prefer:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={videoLink}
            className="text-inherit"
          >
            {videoLink}
          </a>
        </div>
      </div>
    );
  }

  renderClosed() {
    return (
      <div className="Message">
        <div className="Message-bubble Message-bubble--system">
          Thank you for your feedback! This conversation will be deleted in 48
          hours.
        </div>
      </div>
    );
  }

  renderMessages() {
    const { session } = this.props;
    let { asker, helper, messages = [] } = this.state;
    const currentUser = session.state;
    let currentAuthorUID = null;

    // Use latest personal data for the currently logged user
    // We don't update for the other part to avoid confusion
    if (currentUser.uid === asker.uid) {
      asker = currentUser;
    } else {
      helper = currentUser;
    }

    return messages.map(message => {
      const author = message.author === asker.uid ? asker : helper;
      const isMyMessage = author.uid === currentUser.uid;
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
          {!!message.value && (
            <div className={`Message${isMyMessage ? " Message--me" : ""}`}>
              {avatar}
              <div
                className={`Message-bubble ${
                  message.auto ? "Message-bubble--auto" : ""
                }`}
              >
                {message.value}
              </div>
            </div>
          )}
          {message.auto === "accepted-video" && this.renderVideoLink()}
          {message.auto === "feedback" && isMyMessage && this.renderClosed()}
        </Fragment>
      );
    });
  }

  renderVideoChatActions(message) {
    const { asker, helper } = this.state;
    const author = message.author === asker.uid ? asker : helper;

    return (
      <Fragment>
        <div className="Message-form-textarea pb-15">
          <p className="mb-2 leading-normal">
            @{author.username} suggested a video chat. If you are too shy, are
            in a public place or don’t have the hardware, click “Sorry I can’t”.
          </p>
        </div>

        <div className="Message-form-actions">
          <button
            className="Button border-none bg-teal-lightest py-2 px-3 mr-2 rounded tracking-normal"
            onClick={this.handleAcceptVideo}
          >
            Yes, let's video chat!
          </button>

          <button
            className="Button border-none bg-teal-lightest py-2 px-3 mr-2 rounded tracking-normal"
            onClick={this.handleDeclineVideo}
          >
            Sorry, I can't!
          </button>
        </div>
      </Fragment>
    );
  }

  renderGoodbyeActions(message) {
    const { asker, helper } = this.state;
    const author = message.author === asker.uid ? asker : helper;

    return (
      <Fragment>
        <div className="Message-form-textarea pb-15">
          <p className="mb-2 leading-normal">
            @{author.username} pressed goodbye! If{" "}
            {author.pronoun.split(" ")[0].toLowerCase()} helped you in any way,
            be sure to thank {author.pronoun.split(" ")[2].toLowerCase()}.
          </p>
        </div>

        <div className="Message-form-actions">
          <button
            className="Button border-none bg-teal-lightest py-2 px-3 mr-2 rounded tracking-normal"
            onClick={this.handleThankGoodbye}
          >
            Bye, thank you!
          </button>

          <button
            className="Button border-none bg-teal-lightest py-2 px-3 mr-2 rounded tracking-normal"
            onClick={this.handleReplyGoodbye}
          >
            Bye, see ya!
          </button>
        </div>
      </Fragment>
    );
  }

  renderDefaultActions(videoChatSuggested, pressedGoodbye) {
    const { session } = this.props;
    const currentUser = session.state;
    const { asker } = this.state;
    const hasActions =
      !videoChatSuggested || (!pressedGoodbye && currentUser.uid !== asker.uid);

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <Textarea
            innerRef={node => (this.textarea = node)}
            onKeyDown={this.handleKeyDown}
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
                onClick={this.handleSuggestVideo}
              >
                Suggest a video chat
              </button>
            )}

            {!pressedGoodbye &&
              currentUser.uid !== asker.uid && (
                <button
                  className="Button border-none bg-brown-light py-2 px-3 mr-2 rounded text-sm tracking-normal"
                  onClick={this.handlePressGoodbye}
                >
                  Say goodbye
                </button>
              )}
          </div>
        )}
      </Fragment>
    );
  }

  renderFeedbackActions(about) {
    const { session } = this.props;
    const currentUser = session.state;

    return (
      <FeedbackBuilder
        author={currentUser}
        about={about}
        rating={null}
        onClick={this.handleFeedback}
      />
    );
  }

  renderActions() {
    const { session } = this.props;
    const currentUser = session.state;
    const { asker, helper, messages = [] } = this.state;

    const videoChatSuggestion = messages.find(
      message => message.auto === "suggested-video"
    );
    const videoChatReply = messages.find(
      message =>
        message.auto === "accepted-video" || message.auto === "declined-video"
    );

    if (
      !videoChatReply &&
      videoChatSuggestion &&
      videoChatSuggestion.author !== currentUser.uid
    ) {
      return this.renderVideoChatActions(videoChatSuggestion);
    }

    const goodbyeMessage = messages.find(
      message => message.auto === "pressed-goodbye"
    );
    const goodbyeReply = messages.find(
      message => message.auto === "replied-goodbye"
    );

    if (currentUser.uid === asker.uid && !goodbyeReply && goodbyeMessage) {
      return this.renderGoodbyeActions(goodbyeMessage);
    }

    const feedbackMessage = messages.find(
      message =>
        message.auto === "feedback" && message.author === currentUser.uid
    );

    if (!feedbackMessage && currentUser.uid === asker.uid && goodbyeReply) {
      return this.renderFeedbackActions(helper);
    }

    if (!feedbackMessage && currentUser.uid !== asker.uid && goodbyeMessage) {
      return this.renderFeedbackActions(asker);
    }

    return this.renderDefaultActions(!!videoChatSuggestion, !!goodbyeMessage);
  }

  renderForm() {
    const { session } = this.props;

    return (
      <div className="Message Message--me mt-8">
        <div className="Message-author">
          <Avatar {...session.state.avatarStyles} size="4rem" />
        </div>

        <div className="Message-form">{this.renderActions()}</div>
      </div>
    );
  }

  render() {
    const { asker, helper } = this.state;
    if (!asker || !helper) return null;

    return (
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-1" />

        <div className="p-6 mx-auto w-full max-w-md mb-8">
          {this.renderMessages()}
          {this.renderForm()}
        </div>
      </div>
    );
  }
}

export default props => (
  <Subscribe to={[SessionContainer]}>
    {session => <Chat {...props} session={session} />}
  </Subscribe>
);
