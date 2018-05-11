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
    thanked: 0,
  }

  isSignedIn() {
    return !!this.state.uid;
  }

  isOnboarded() {
    const { uid, username, languages } = this.state; 
    return uid && username && languages.length > 0;
  }

  setUsername = (username) => {
    this.updateProfile({ username });
  }

  setAvatarStyle = (name, value) => {
    const avatarStyles = { ...this.state.avatarStyles };
    avatarStyles[name] = value;
    this.updateProfile({ avatarStyles });
  }

  setPronoun = (pronoun) => {
    this.updateProfile({ pronoun });
  }

  setLanguageName = (index, name) => {
    const languages = [...this.state.languages];
    if (!languages[index]) languages[index] = { icon: '🏳️' };
    languages[index].name = name;
    this.updateProfile({ languages });
  }

  setLanguageIcon = (index, icon) => {
    const languages = [...this.state.languages];
    if (!languages[index]) languages[index] = { name: '' };
    languages[index].icon = icon;
    this.updateProfile({ languages });
  }

  updateProfile(profile) {
    database.ref('users/' + this.state.uid).set({ ...this.state, ...profile });
    this.setState(profile);
  }
}

const session = new SessionContainer();

auth.onAuthStateChanged((user) => {
  database.ref('users/' + user.uid).once('value').then((profile) => {
    session.setState({ uid: user.uid, email: user.email, ...profile.val(), ready: true });
  });
});

export default session;
