import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  //aca nos copiamos del navegador lo que nos entrega firebase
});

export const getFirebase = () => app;

export const getFirestore = () => app.firestore();
