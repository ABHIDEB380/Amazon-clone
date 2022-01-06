// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    // onAuthStateChanged,
    // GoogleAuthProvider,
    // signInWithPopup,
    // signOut,
  } from 'firebase/auth';
  import {
    getStorage,
    // ref,
    // uploadBytesResumable,
    // getDownloadURL,
  } from 'firebase/storage';
import{getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC8ogAMc7z7_tBKzuqQCb2x40iKKaRfMVs",
    authDomain: "clone-6ab45.firebaseapp.com",
    projectId: "clone-6ab45",
    storageBucket: "clone-6ab45.appspot.com",
    messagingSenderId: "297380600986",
    appId: "1:297380600986:web:18a79b6a657bc07f0c1323",
    measurementId: "G-BN4TE7VDTR"
};



const firebaseApp = initializeApp(firebaseConfig);

// const firebase= getFirebaseConfig();
// initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth= getAuth(firebaseApp);

export {db, auth};
