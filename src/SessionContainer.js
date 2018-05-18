import { Container } from "unstated";
import firebase from "./firebase";

const database = firebase.database();
const auth = firebase.auth();

class SessionContainer extends Container {
  state = {
    ready: false,
    uid: null,
    email: null,
    username: "",
    pronoun: "They / Them",
    languages: [],
    avatarStyles: {
      topType: "NoHair",
      accessoriesType: "Blank",
      hairColor: "BlondeGolden",
      facialHairType: "Blank",
      facialHairColor: "BlondeGolden",
      skinColor: "Yellow",
    },
    helpDescription: "",
    readCodeOfConduct: false,
    thanked: 0,
  };

  isSignedIn() {
    return !!this.state.uid;
  }

  isOnboarded() {
    const { uid, username, languages } = this.state;
    return uid && username && languages.length > 0;
  }

  updateProfile(profile) {
    return database.ref("users/" + this.state.uid).set({ ...this.state, ...profile });
  }

  ask = () => {
    return database.ref("asks/" + this.state.uid).set({ asker: this.state });
  };

  stopAsking = () => {
    return database.ref("asks/" + this.state.uid).remove();
  };
}

const session = new SessionContainer();

auth.onAuthStateChanged(user => {
  if (user) {
    database.ref("users/" + user.uid).on("value", profile => {
      session.setState({
        uid: user.uid,
        email: user.email,
        ...profile.val(),
        ready: true,
      });
    });
  } else {
    session.setState({ uid: null, ready: true });
  }
});

export default session;
