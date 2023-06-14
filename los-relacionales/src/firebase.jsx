import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFHtsbBQrXfYqzv1h7Qfvm0pA7b0yj1Ms",
  authDomain: "vidaplena-login.firebaseapp.com",
  projectId: "vidaplena-login",
  storageBucket: "vidaplena-login.appspot.com",
  messagingSenderId: "545671591403",
  appId: "1:545671591403:web:32465791eb2e00e66bd5ae"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();