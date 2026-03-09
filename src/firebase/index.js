// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdaBGNMmkTIsyX-P2EVzS5Lks8W8U-0UE",
  authDomain: "chatapp-1af3c.firebaseapp.com",
  projectId: "chatapp-1af3c",
  storageBucket: "chatapp-1af3c.firebasestorage.app",
  messagingSenderId: "392876877408",
  appId: "1:392876877408:web:47d294bdcbc61afca9c505",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth servisinin referansını al
export const auth = getAuth(app);

// Google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();
