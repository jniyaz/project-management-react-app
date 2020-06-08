import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDZRCe4rl-clKpvGahQdTA98XHlALMycW0",
  authDomain: "project-planner-app-88155.firebaseapp.com",
  databaseURL: "https://project-planner-app-88155.firebaseio.com",
  projectId: "project-planner-app-88155",
  storageBucket: "project-planner-app-88155.appspot.com",
  messagingSenderId: "540790945549",
  appId: "1:540790945549:web:1cbfa5f4fd8e56b194e244",
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
