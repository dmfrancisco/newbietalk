// Add support in Node v6.11.5, the version supported by Google Cloud Functions
require("core-js/fn/object/entries");
require("core-js/fn/object/values");

const functions = require("firebase-functions");
const admin = require("firebase-admin");

const config = JSON.parse(process.env.FIREBASE_CONFIG);
const maxAge = 6; // In hours

admin.initializeApp({
  databaseURL: config.databaseURL,
  databaseAuthVariableOverride: { uid: "admin" },
});

const database = admin.database();

// When requested this function will delete every chat that has been inactive for N hours
exports.cleanupChats = functions.https.onRequest((req, res) => {
  database.ref("chats").once("value", data => {
    const chats = data.val() || {};

    Object.entries(chats).forEach(([ref, chat]) => {
      const messages = Object.values(chat.messages);
      const isClosed = messages.some(msg => msg.auto === "pressed-goodbye");
      const lastMessage = messages[messages.length - 1];
      const now = new Date();
      const age = (now - new Date(lastMessage.timestamp)) / (1000 * 60 * 60);

      if (isClosed && age > maxAge) {
        database.ref(`chats/${ref}`).remove();
        console.log("Deleted chat with ref:", ref);
      }
    });

    console.log("Chat cleanup finished");
    res.send("Chat cleanup finished");
  });
});
