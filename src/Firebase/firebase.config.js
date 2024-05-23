// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMyfM0oU4hisnc794M50ihzZ4wTaReI1k",
  authDomain: "foodking-website.firebaseapp.com",
  projectId: "foodking-website",
  storageBucket: "foodking-website.appspot.com",
  messagingSenderId: "555566159778",
  appId: "1:555566159778:web:8be8819553e3f47742c4fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth