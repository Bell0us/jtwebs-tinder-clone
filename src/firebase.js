import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGHxG5T6CXQmCR_djhY6cPX47adPtyA0U",
    authDomain: "jtwebs-tinder-clone.firebaseapp.com",
    projectId: "jtwebs-tinder-clone",
    storageBucket: "jtwebs-tinder-clone.appspot.com",
    messagingSenderId: "576917469432",
    appId: "1:576917469432:web:f7caa445fcb86cb89e630d",
    measurementId: "G-ZMM24G2LS2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;