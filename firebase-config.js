// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDNL6Ik1-uFaELPwgUSTxLgVbgv_WjxplU",
    authDomain: "top16-c8cea.firebaseapp.com",
    projectId: "top16-c8cea",
    storageBucket: "top16-c8cea.appspot.com",
    messagingSenderId: "385617260592",
    appId: "1:385617260592:web:7df4bc31410f9e1f5791bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firestore database instance so other files can import it directly
export const db = getFirestore(app);