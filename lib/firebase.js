// app/firebase.js veya lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7leJeRdF8imaYbpMlx12XfVSwddAmosM",
    authDomain: "sinemkaya-tr.firebaseapp.com",
    projectId: "sinemkaya-tr",
    storageBucket: "sinemkaya-tr.firebasestorage.app",
    messagingSenderId: "704609089802",
    appId: "1:704609089802:web:d5160441b31d32c000a2f3",
    measurementId: "G-1HTWDGFJ56"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firestore bağlantısını al
const database = getFirestore(app);

export { database };
