import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyDuYVbheGQ2iRBW4Ta9pAoBXQvvYd6LUfo",
  authDomain: "chat202-c925e.firebaseapp.com",
  projectId: "chat202-c925e",
  storageBucket: "chat202-c925e.appspot.com",
  messagingSenderId: "447792658781",
  appId: "1:447792658781:web:a671534399903b169590b4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
