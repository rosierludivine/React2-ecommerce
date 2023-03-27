// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFAbxKIscmYCaCCihMr-YuXdpMVcqHOk0",
    authDomain: "ecommerce-react-67156.firebaseapp.com",
    projectId: "ecommerce-react-67156",
    storageBucket: "ecommerce-react-67156.appspot.com",
    messagingSenderId: "945464005662",
    appId: "1:945464005662:web:d2a2db0ed2b7d01d0a4a0f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export { database };