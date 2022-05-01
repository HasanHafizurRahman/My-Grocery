// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID
  

  // apiKey: "AIzaSyDYUoer4hxZ17oCvF5sumtpWwAdw3fxk_g",
  // authDomain: "my-grocery-shop-299ee.firebaseapp.com",
  // projectId: "my-grocery-shop-299ee",
  // storageBucket: "my-grocery-shop-299ee.appspot.com",
  // messagingSenderId: "531416739323",
  // appId: "1:531416739323:web:7a6d42b77920b1480c2f5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;