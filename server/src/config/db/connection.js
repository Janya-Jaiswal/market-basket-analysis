// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu35HRXyUWgU1WXqdQ_11Ni0ZyrNndCgQ",
  authDomain: "market-basket-analysis-2367a.firebaseapp.com",
  projectId: "market-basket-analysis-2367a",
  storageBucket: "market-basket-analysis-2367a.firebasestorage.app",
  messagingSenderId: "264830760145",
  appId: "1:264830760145:web:052f5c2ce347f7b092c1f0",
  measurementId: "G-52MXSXZQTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);