import React, { Component } from "react";
import { Helmet } from "react-helmet";
import firebase from "./firebase";
import Drum from "./images/Drum";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain for this
  // URL must be whitelisted in the Firebase Console.
  url: `https://${window.location.host}/welcome`,
  // This must be true.
  handleCodeInApp: true,
};

class Start extends Component {
  state = {
    email: "",
  };

  handleChange = e => {
    const email = e.target.value;
    this.setState({ email });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { history } = this.props;
    const { email } = this.state;

    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);

        history.push("/", {
          flash: "Great! Please follow the link in the email we just sent you.",
        });
      })
      .catch(error => {
        // Some error occurred, you can inspect the code: error.code
        console.error(error);

        const flash = `Oops… ${error.message}`;
        history.push({ ...history.location, state: { flash } });
      });
  };

  render() {
    const { email } = this.state;

    return (
      <div className="container max-w-md flex justify-center items-center text-center text-lg min-h-screen">
        <Helmet>
          <html className="bg-brown-light" />
        </Helmet>

        <form
          onSubmit={this.handleSubmit}
          className="w-full"
          style={{ maxWidth: "22rem" }}
        >
          <Drum className="mb-8" />

          <label className="block mb-8">
            <span className="block mb-4 font-bold">Your email address</span>

            <input
              type="email"
              onChange={this.handleChange}
              value={email}
              placeholder="hello@world.com"
              className="border-3 rounded px-4 py-3 w-full text-center"
            />
          </label>

          <button className="Button bg-brown-lighter px-4 py-2">
            Continue
          </button>
        </form>
      </div>
    );
  }
}

export default Start;
