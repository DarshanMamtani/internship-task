import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBHK-QPFTuCRsZFfyJzrSKWfTcJ6IwQf10",
  authDomain: "deveesoft.firebaseapp.com",
  databaseURL: "https://deveesoft.firebaseio.com",
  projectId: "deveesoft",
  storageBucket: "deveesoft.appspot.com",
  messagingSenderId: "776975941029",
  appId: "1:776975941029:web:f98d0eccffcf707b85bc4c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };