import { Container } from "unstated";
import firebase from "./firebase";

const database = firebase.database();

class AsksContainer extends Container {
  state = {
    current: {},
  };

  offer = (askerUID, helper) => {
    return database
      .ref(`asks/${askerUID}/helpers/${helper.uid}`)
      .set({ ...helper, accepted: false });
  };

  stopOffer = (askerUID, helper) => {
    return database.ref(`asks/${askerUID}/helpers/${helper.uid}`).remove();
  };

  accept = (askerUID, helper) => {
    return database
      .ref(`asks/${askerUID}/helpers/${helper.uid}`)
      .set({ ...helper, accepted: true });
  };
}

const asks = new AsksContainer();

database.ref("asks").on("value", state => {
  const current = state.val() || {};
  asks.setState({ current });
});

export default asks;
