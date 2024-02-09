import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { addDoc } from "firebase/firestore";

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
// @ts-ignore
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// try {
//   const docRef = await addDoc(collection(db, "guild"), {
//     allyCode: "335813917",
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

const querySnapshot = await getDocs(collection(db, "guild"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
