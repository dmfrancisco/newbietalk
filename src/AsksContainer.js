import { Container } from "unstated";
import firebase from "./firebase";

const database = firebase.database();

class AsksContainer extends Container {
  state = {
    current: {}      
  }
}

const asks = new AsksContainer();

database.ref('asks').on('value', (state) => {
  const current = state.val() || {};
  asks.setState({ current });
});

export default asks;
