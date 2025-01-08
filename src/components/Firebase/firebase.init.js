// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtOBrKtKQstZyUucKXDFm0DAoG22o7poU",
  authDomain: "provider-routes.firebaseapp.com",
  projectId: "provider-routes",
  storageBucket: "provider-routes.firebasestorage.app",
  messagingSenderId: "184511991788",
  appId: "1:184511991788:web:bbe4ffaebb6f495bac7ac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;