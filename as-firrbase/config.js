import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIWTgmELwUhjLt9v7uctWw2T7T11NzQ7w",
  authDomain: "first-web-aabcd.firebaseapp.com",
  projectId: "first-web-aabcd",
  storageBucket: "first-web-aabcd.firebasestorage.app",
  messagingSenderId: "1022389154341",
  appId: "1:1022389154341:web:d819fae60213c43c3d85cc",
  measurementId: "G-XZZJ0F601N",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword , signOut};
