import { getFirestore } from "../Firebase/firebase";

const firestore = getFirestore();
const collectCategories = firestore.collection("categories");
const collectProducts = firestore.collection("items");
const collectSingleProduct = (id) => {
  return firestore.collection("items").doc(id).get();
};

// Retorna objeto 'product'
export const getProductById = (id) => {
  return collectSingleProduct(id).then((res) => {
    if (res) return res;
    throw new Error(`No '${id}' item results.`);
  });
};

export const listCallback = (res) =>
  res.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
