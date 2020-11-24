import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARM-K54hnWo6p3E-WeFcSj8ue-zj8kifY",
    authDomain: "crwn-db-67240.firebaseapp.com",
    databaseURL: "https://crwn-db-67240.firebaseio.com",
    projectId: "crwn-db-67240",
    storageBucket: "crwn-db-67240.appspot.com",
    messagingSenderId: "981879953801",
    appId: "1:981879953801:web:b420394609c08069636958",
    measurementId: "G-HZHPXWGBCZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;
