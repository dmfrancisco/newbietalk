import { Component } from "react";
import firebase from "./firebase";

class SignOut extends Component {
  componentDidMount() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.props.history.push('/', { 
        flash: "Bye, talk to you later!"
      });

    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
  }

  render() {
    return null;
  }
}

export default SignOut;
