import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZEHV3QJ7tRZJcQAKYzRkBzdNPxJYl52A",
  authDomain: "jarjarspoolservice.firebaseapp.com",
  projectId: "jarjarspoolservice",
  storageBucket: "jarjarspoolservice.appspot.com",
  messagingSenderId: "38435514520",
  appId: "1:38435514520:web:61ca9b19a374a2e63e88ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
