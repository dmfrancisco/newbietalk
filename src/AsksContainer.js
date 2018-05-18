import { Container } from "unstated";
import firebase from "./firebase";

const database = firebase.database();

class AsksContainer extends Container {
  state = {
    current: {},
  };

  offer = (askerUID, helper) => {
    return database.ref(`asks/${askerUID}/helpers/${helper.uid}`).set({ ...helper, chatKey: null });
  };

  stopOffer = (askerUID, helper) => {
    return database.ref(`asks/${askerUID}/helpers/${helper.uid}`).remove();
  };

  accept = (asker, helper) => {
    const chatKey = database
      .ref()
      .child("chats")
      .push().key;

    const updates = {};
    updates[`/chats/${chatKey}`] = { asker, helper };
    updates[`asks/${asker.uid}/helpers/${helper.uid}`] = { ...helper, chatKey };

    return firebase
      .database()
      .ref()
      .update(updates);
  };
}

const asks = new AsksContainer();

database.ref("asks").on("value", state => {
  const current = state.val() || {};
  asks.setState({ current });
});

export default asks;
