import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1cBT9rr5hvqQR18mLyYkqp7R1oJxnh7I",
  authDomain: "react-helpdesk-2ba81.firebaseapp.com",
  projectId: "react-helpdesk-2ba81",
  storageBucket: "react-helpdesk-2ba81.appspot.com",
  messagingSenderId: "616013372498",
  appId: "1:616013372498:web:645ae3909c12ff9e8dd38b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;