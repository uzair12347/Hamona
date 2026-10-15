// Firebase Configuration — Browser (CDN) version
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Aap ka Firebase config (real values)
const firebaseConfig = {
  apiKey: "AIzaSyCxKBwAAEmwoX3VqyVwrtr4XhduB4HHW1o",
  authDomain: "hamona-c4008.firebaseapp.com",
  projectId: "hamona-c4008",
  storageBucket: "hamona-c4008.firebasestorage.app",
  messagingSenderId: "97221214395",
  appId: "1:97221214395:web:601d92ede96c418663699e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);