// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsigI-FGzAYnB52x14iuk6mNfLsqymidU",
  authDomain: "chatgpt-messenger-yt-60f53.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-60f53",
  storageBucket: "chatgpt-messenger-yt-60f53.appspot.com",
  messagingSenderId: "1060170583511",
  appId: "1:1060170583511:web:6d96663cfd6be4fd23cf92"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db }; 