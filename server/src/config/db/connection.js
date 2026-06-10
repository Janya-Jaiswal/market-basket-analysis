// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import keys from "../environmentVariables/secret.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId,
  appId: keys.appId,
  measurementId: keys.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);