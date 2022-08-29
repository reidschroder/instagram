

 

//   export default db;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'
// import { getAuth } from "firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEopSMxkRwJ-SIXehbrWmcVFtVZB4ELyE",
    authDomain: "instagram-clone-9bc82.firebaseapp.com",
    projectId: "instagram-clone-9bc82",
    storageBucket: "instagram-clone-9bc82.appspot.com",
    messagingSenderId: "964253842395",
    appId: "1:964253842395:web:0fe8cda1ede51fe4d8c5fe",
    measurementId: "G-8MNNHZYPJZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };