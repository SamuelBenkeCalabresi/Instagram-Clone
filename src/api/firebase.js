import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLfE1ZnR_3Zcgf8TBsMa5Qyi0dJ6IGwlg",
  authDomain: "instagram-clone-44582.firebaseapp.com",
  databaseURL: "https://instagram-clone-44582.firebaseio.com",
  projectId: "instagram-clone-44582",
  storageBucket: "instagram-clone-44582.appspot.com",
  messagingSenderId: "792664311877",
  appId: "1:792664311877:web:7c9b464126d31c8825bb2c",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
