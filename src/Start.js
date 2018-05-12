import React, { Component } from "react";
import firebase from "./firebase";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain for this
  // URL must be whitelisted in the Firebase Console.
  url: `https://${window.location.host}/welcome`,
  // This must be true.
  handleCodeInApp: true,
};

class Start extends Component {
  state = {
    email: ""
  }

  handleChange = (e) => {
    const email = e.target.value;
    this.setState({ email })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { history } = this.props;
    const { email } = this.state;
    
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);

        history.push('/', {
          flash: "Great! Please follow the link in the email we just sent you."
        });
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        console.error(error);
      });
  }

  render() {
    const { email } = this.state;

    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input type="email" onChange={this.handleChange} value={email} />
        </form>
      </div>
    );
  }
}

export default Start;
