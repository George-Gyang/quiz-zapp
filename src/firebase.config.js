// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzWO7UiqQtb_UnrI3nMrn9Wq2P1RfLfDE",
  authDomain: "quizzybyte.firebaseapp.com",
  projectId: "quizzybyte",
  storageBucket: "quizzybyte.appspot.com",
  messagingSenderId: "572334051245",
  appId: "1:572334051245:web:295f39c89361cb5bc45b24",
  measurementId: "G-M8WBK21SWX"
};

// Initialize Firebase
const firebaseConfigApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseConfigApp