import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
