import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsZkliK-SQ7kb_j9rqLuNSKnv4a9U2eKk",
  authDomain: "clone-e872a.firebaseapp.com",
  projectId: "clone-e872a",
  storageBucket: "clone-e872a.appspot.com",
  messagingSenderId: "563777125521",
  appId: "1:563777125521:web:4aa92f7259722aa49c5330",
  measurementId: "G-HBHM7YE1JP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
