import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDz0vZTYue3j-2oJnhaseiqQrqAZOd-z2E",
  authDomain: "smalltalk-dd649.firebaseapp.com",
  databaseURL: "https://smalltalk-dd649.firebaseio.com",
  projectId: "smalltalk-dd649",
  storageBucket: "smalltalk-dd649.appspot.com",
  messagingSenderId: "402231690407",
};

firebase.initializeApp(config);

export default firebase;
