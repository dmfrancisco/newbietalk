import React, { Component } from "react";
import { Subscribe } from "unstated";
import DemoContainer from "../containers/DemoContainer";
import Header from "./Header";
import Avatar from "../Avatar";
import FeedbackBuilder from "../FeedbackBuilder";

const durations = [
  1800,
  3000,
  3400,
  3000,
  3200,
  3000,
  3800,
  4200,
  4600,
  5000,
  3000,
  6200, // Button
  15000, // Video call
  3200,
  3600,
  3000, // Button
  2000,
  3600,
  6000, // Button
  7000, // Feedback button
];

export default class extends Component {
  static defaultProps = {
    totalSteps: 18,
  };

  state = {
    stepIndex: 0,
  };

  showNext = () => {
    const { stepIndex } = this.state;
    const { totalSteps } = this.props;

    this.setState({
      stepIndex: Math.min(stepIndex + 1, totalSteps - 1),
    });
  };

  unschedule() {
    clearTimeout(this.timer);
  }

  scheduleNext() {
    const { stepIndex } = this.state;
    const { totalSteps } = this.props;

    clearTimeout(this.timer);

    if (stepIndex < totalSteps - 1) {
      this.timer = setTimeout(this.showNext, durations[stepIndex]);
    }
  }

  componentDidUpdate() {
    this.props.scrollToBottom();
    this.scheduleNext();
  }

  componentDidMount() {
    this.scheduleNext();
  }

  componentWillUnmount() {
    this.unschedule();
  }

  render() {
    const { stepIndex } = this.state;

    return (
      <Subscribe to={[DemoContainer]}>
        {profile => {
          const helper = profile.state.helper;

          return (
            <div className="p-6 pt-4 hyphens">
              <Header avatarStyles={profile.state.avatarStyles} />

              <div className="Message">
                <div className="Message-author">
                  <Avatar {...helper.avatarStyles} size="4rem" />
                </div>

                {stepIndex >= 1 && (
                  <div className="Message-bubble">
                    Hello! So you created a website in your computer and you now
                    want to share it with the world.
                  </div>
                )}
              </div>

              {stepIndex >= 2 && (
                <div className="Message">
                  <div className="Message-bubble">
                    And you want this to be free.
                  </div>
                </div>
              )}

              <div className="Message Message--me">
                <div className="Message-author">
                  <Avatar {...profile.state.avatarStyles} size="4rem" />
                </div>

                {stepIndex >= 3 && (
                  <div className="Message-bubble">
                    hello. thanks for helping me
                  </div>
                )}
              </div>

              {stepIndex >= 4 && (
                <div className="Message Message--me">
                  <div className="Message-bubble">
                    Yes, I know basic html and css and the site works in my
                    firefox.
                  </div>
                </div>
              )}

              {stepIndex >= 5 && (
                <div className="Message">
                  <div className="Message-author">
                    <Avatar {...helper.avatarStyles} size="4rem" />
                  </div>

                  <div className="Message-bubble">
                    Ok{" "}
                    <span role="img" aria-label="Thumbs Up">
                      👍
                    </span>{" "}
                    And just to confirm these are “static” .html and .css files.
                    You don’t have a database or “server” files like .php,
                    right?
                  </div>
                </div>
              )}

              {stepIndex >= 6 && (
                <div className="Message Message--me">
                  <div className="Message-author">
                    <Avatar {...profile.state.avatarStyles} size="4rem" />
                  </div>

                  <div className="Message-bubble">I think so, yes.</div>
                </div>
              )}

              {stepIndex >= 7 && (
                <div className="Message">
                  <div className="Message-author">
                    <Avatar {...helper.avatarStyles} size="4rem" />
                  </div>

                  <div className="Message-bubble">
                    Can I take a look? Maybe we can screenshare. There are many
                    great free tools, but some require you too learn some extra
                    stuff. I can give you some bookmarks and some keywords you
                    can search for if you’re interested.
                  </div>
                </div>
              )}

              {stepIndex >= 8 && (
                <div className="Message Message--me">
                  <div className="Message-author">
                    <Avatar {...profile.state.avatarStyles} size="4rem" />
                  </div>

                  <div className="Message-bubble">
                    Thank you!! That would be great.
                  </div>
                </div>
              )}

              {stepIndex >= 9 && (
                <div className="Message Message--me">
                  <div className="Message-bubble">
                    During my research I found this promising article but I
                    wasn’t able to make it work:{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://devcenter.heroku.com/articles/dropbox-sync"
                      className="text-inherit"
                    >
                      https://devcenter.heroku.com/articles/dropbox-sync
                    </a>
                  </div>
                </div>
              )}

              {stepIndex >= 10 && (
                <div className="Message">
                  <div className="Message-author">
                    <Avatar {...helper.avatarStyles} size="4rem" />
                  </div>

                  <div className="Message-bubble">
                    Interesting! That’s one way to do it.
                  </div>
                </div>
              )}

              {stepIndex >= 11 && (
                <div className="Message">
                  <div className="Message-bubble Message-bubble--auto">
                    @{helper.username} suggested a video chat
                  </div>
                </div>
              )}

              {stepIndex >= 11 && (
                <div className="Message">
                  <div className="Message-bubble Message-bubble--system">
                    @{helper.username} suggested a video chat. If you are too
                    shy, are in a public place or don’t have the hardware, click
                    “Sorry I can’t”.
                  </div>
                </div>
              )}

              {stepIndex === 11 && (
                <div className="Message Message--me">
                  <div className="Message-author">
                    <Avatar {...profile.state.avatarStyles} size="4rem" />
                  </div>

                  <div>
                    <button className="Button bg-brown-light mr-2">
                      Yes, let’s video chat!
                    </button>

                    <button
                      className="Button bg-brown-light mr-2"
                      style={{ marginRight: "5rem" }}
                    >
                      Sorry, I can’t!
                    </button>
                  </div>
                </div>
              )}

              {stepIndex >= 12 && (
                <div className="Message Message--me">
                  <div className="Message-author">
                    <Avatar {...profile.state.avatarStyles} size="4rem" />
                  </div>

                  <div>
                    <button className="Button bg-teal-lightest mr-2">
                      Yes, let’s video chat!
                    </button>

                    <div className="inline-block Message-bubble Message-bubble--auto">
                      Sorry, I can’t!
                    </div>
                  </div>
                </div>
              )}

              {stepIndex >= 12 && (
                <div className="Message">
                  <div className="Message-bubble Message-bubble--system">
                    Alright! You can use this link or a different software if
                    you prefer:{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://appear.in/smalltalk-4815162342"
                      className="text-inherit"
                    >
                      https://appear.in/smalltalk-4815162342
                    </a>
                  </div>
                </div>
              )}

              {stepIndex >= 13 && (
                <div className="Message Message--me">
                  <div className="Message-author">
                    <Avatar {...profile.state.avatarStyles} size="4rem" />
                  </div>

                  <div className="Message-bubble">Thank you so much again!</div>
                </div>
              )}

              {stepIndex >= 14 && (
                <div className="Message">
                  <div className="Message-author">
                    <Avatar {...helper.avatarStyles} size="4rem" />
                  </div>

                  <div className="Message-bubble">No problem, bye!</div>
                </div>
              )}

              {stepIndex >= 15 && (
                <div className="Message">
                  <div className="Message-bubble Message-bubble--system">
                    @{helper.username} pressed goodbye! If{" "}
                    {helper.pronoun.split(" ")[0].toLowerCase()} helped you in
                    any way, be sure to thank{" "}
                    {helper.pronoun.split(" ")[2].toLowerCase()}.
                  </div>
                </div>
              )}

              {stepIndex === 15 && (
                <div className="Message Message--me">
                  <div className="Message-author">
                    <Avatar {...profile.state.avatarStyles} size="4rem" />
                  </div>

                  <div>
                    <button className="Button bg-brown-light mr-2">
                      Bye, thank you!
                    </button>

                    <button
                      className="Button bg-brown-light mr-2"
                      style={{ marginRight: "5rem" }}
                    >
                      Bye, see ya!
                    </button>
                  </div>
                </div>
              )}

              {stepIndex >= 16 && (
                <div className="Message Message--me">
                  <div className="Message-author">
                    <Avatar {...profile.state.avatarStyles} size="4rem" />
                  </div>

                  <div>
                    <button className="Button bg-teal-lightest mr-2">
                      Bye, thank you!
                    </button>

                    <div className="inline-block Message-bubble Message-bubble--auto">
                      Bye, see ya!
                    </div>
                  </div>
                </div>
              )}

              {stepIndex >= 16 && (
                <FeedbackBuilder
                  author={profile.state}
                  about={helper}
                  className="m-6"
                  style={{ marginRight: "5rem", marginLeft: "5rem" }}
                  rating={stepIndex >= 17 ? 4 : null}
                />
              )}

              {stepIndex >= 17 && (
                <div className="Message">
                  <div className="Message-bubble Message-bubble--system my-0">
                    We’re glad you had a good experience. <br /> Thank you for
                    your feedback!
                  </div>
                </div>
              )}

              {stepIndex >= 17 && (
                <div className="Message">
                  <div className="Message-bubble Message-bubble--system mt-1">
                    This conversation will be deleted in 48 hours.
                  </div>
                </div>
              )}
            </div>
          );
        }}
      </Subscribe>
    );
  }
}
