// ACÁ INSTALAMOS Y PEDIMOS LA API
import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  //aca nos copiamos del navegador lo que nos entrega firebase

  apiKey: "AIzaSyDx0PaYkXc-LQbahWFVcH7F3syPniAQJ68",
  authDomain: "react-coder-house.firebaseapp.com",
  projectId: "react-coder-house",
  storageBucket: "react-coder-house.appspot.com",
  messagingSenderId: "102726752357",
  appId: "1:102726752357:web:4cca05d409ba7d6f5f0e8c",
});

export const getFirebase = () => app;

export const getFirestore = () => app.firestore();
