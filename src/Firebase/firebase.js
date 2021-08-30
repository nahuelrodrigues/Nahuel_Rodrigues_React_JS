// ACÁ INSTALAMOS Y PEDIMOS LA API

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  //aca nos copiamos del navegador lo que nos entrega firebase

  apiKey: "AIzaSyDx0PaYkXc-LQbahWFVcH7F3syPniAQJ68",
  authDomain: "react-coder-house.firebaseapp.com",
  projectId: "react-coder-house",
  storageBucket: "react-coder-house.appspot.com",
  messagingSenderId: "102726752357",
  appId: "1:102726752357:web:4cca05d409ba7d6f5f0e8c",
};

firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore();
