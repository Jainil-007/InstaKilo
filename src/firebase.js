import firebase from "firebase";

/* const firebaseConfig = {
    apiKey: "AIzaSyA8m1gxfoaumb9wdUCvmPcmZj6Q3It_DaQ",
    authDomain: "instakilo-fde06.firebaseapp.com",
    projectId: "instakilo-fde06",
    storageBucket: "instakilo-fde06.appspot.com",
    messagingSenderId: "740108351765",
    appId: "1:740108351765:web:5adeb9e35f1839d119111c"
  }; */

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8m1gxfoaumb9wdUCvmPcmZj6Q3It_DaQ",
    authDomain: "instakilo-fde06.firebaseapp.com",
    projectId: "instakilo-fde06",
    storageBucket: "instakilo-fde06.appspot.com",
    messagingSenderId: "740108351765",
    appId: "1:740108351765:web:5adeb9e35f1839d119111c" 
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

  export {db,auth,storage};
