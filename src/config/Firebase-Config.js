import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDa6kSeLAIszgOfdpkGATWDizEjc9WijCI",
    authDomain: "twmotocycle.firebaseapp.com",
    projectId: "twmotocycle",
    storageBucket: "twmotocycle.firebasestorage.app",
    messagingSenderId: "637885320513",
    appId: "1:637885320513:web:5b2ad27503694d37b2a5c0",
    measurementId: "G-FYMKLE54JX"
  };
  
// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Kết nối Firestore
const db = getFirestore(app);

// Kết nối Firebase Authentication
const auth = getAuth(app);

export { db, auth, collection, getDocs };
