import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqJgmCxSjjc5JyXST2jXZx15Q9i13Hgmw",
  authDomain: "twitter-clone-2771d.firebaseapp.com",
  projectId: "twitter-clone-2771d",
  storageBucket: "twitter-clone-2771d.appspot.com",
  messagingSenderId: "355087984607",
  appId: "1:355087984607:web:9214763691cd3054e7866a",
  measurementId: "G-9ZP2HYL0QE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
