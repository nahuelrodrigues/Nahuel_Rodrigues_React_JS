export let remoteItems = [
  {
    id: 1,
    title: "React Js - The Ultimate Beginner's Guide",
    price: 300,
    category: "libros",
    pictureUrl: "../images/Products/libro1.jpg",
    stock: 5,
  },
  {
    id: 2,
    title: "ReactJS Tutorial",
    price: 400,
    category: "videos",
    pictureUrl: "../images/Products/video1.jpg",
    stock: 2,
  },
  {
    id: 3,
    title: "JavaScript For Impatient Programmers",
    category: "libros",
    price: 500,
    pictureUrl: "../images/Products/libro2.jpg",
    stock: 1,
  },
  {
    id: 4,
    title: "How To Learn React.JS",
    category: "videos",
    price: 600,
    pictureUrl: "../images/Products/video2.jpg",
    stock: 3,
  },
];

export const AllProducts = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(remoteItems);
    }, 2000);
  });
  return promise;
};
