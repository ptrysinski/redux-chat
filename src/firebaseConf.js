import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBxZFZ2klI7vJJGCX_hNsSdRxMcBe12ATU",
    authDomain: "ptrysinski-2acfe.firebaseapp.com",
    databaseURL: "https://ptrysinski-2acfe.firebaseio.com",
    projectId: "ptrysinski-2acfe",
    storageBucket: "ptrysinski-2acfe.appspot.com",
    messagingSenderId: "191173448328"
  };
firebase.initializeApp(config);

export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()