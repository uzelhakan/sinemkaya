// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7leJeRdF8imaYbpMlx12XfVSwddAmosM",
    authDomain: "sinemkaya-tr.firebaseapp.com",
    projectId: "sinemkaya-tr",
    storageBucket: "sinemkaya-tr.appspot.com",
    messagingSenderId: "704609089802",
    appId: "1:704609089802:web:d5160441b31d32c000a2f3",
    measurementId: "G-1HTWDGFJ56",
};

// Firebase'i başlat
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const storage  = getStorage(app);
export const auth     = getAuth(app);
