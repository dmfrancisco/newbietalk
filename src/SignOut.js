import { Component } from "react";
import firebase from "./firebase";

class SignOut extends Component {
  componentDidMount() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.props.history.push('/');

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
