import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU-CeheKzTA7Ea10vveA57PuTGo935GzQ",
  authDomain: "pan-beauty.firebaseapp.com",
  projectId: "pan-beauty",
  storageBucket: "pan-beauty.appspot.com",
  messagingSenderId: "322841674867",
  appId: "1:322841674867:web:9e499737291194daadd606",
  measurementId: "G-7CJWGLGVH9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export {auth, db, storage};