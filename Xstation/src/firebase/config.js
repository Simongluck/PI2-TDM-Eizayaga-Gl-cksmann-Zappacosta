import app from "firebase/app";
import firebase from "firebase;

const firebaseConfig = {
  apiKey: "AIzaSyBX7bdrqg52Kql31ACw1PMAZt2yWzS61xU",
  authDomain: "pi2-tdm-e-g-z.firebaseapp.com",
  projectId: "pi2-tdm-e-g-z",
  storageBucket: "pi2-tdm-e-g-z.firebasestorage.app",
  messagingSenderId: "513210435715",
  appId: "1:513210435715:web:1bbc28a3d8b11e109cf3b6"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const db = app.firestore();
