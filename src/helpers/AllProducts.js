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
  {
    id: 5,
    title: "JavaScript Definitivo",
    category: "pdf",
    price: 600,
    pictureUrl: "../images/Products/pdf1.jpg",
    stock: 3,
  },
  {
    id: 6,
    title: "Frameworkless Front-End Development",
    category: "pdf",
    price: 600,
    pictureUrl: "../images/Products/pdf2.jpg",
    stock: 3,
  },
  {
    id: 7,
    title: "How To Learn React.JS",
    category: "pdf",
    price: 600,
    pictureUrl: "../images/Products/pdf3.jpg",
    stock: 3,
  },
  {
    id: 8,
    title: "Introducing Web Deveopment",
    category: "libros",
    price: 600,
    pictureUrl: "../images/Products/libro3.jpg",
    stock: 3,
  },
  {
    id: 9,
    title: "JavaScript Crash Course",
    category: "videos",
    price: 600,
    pictureUrl: "../images/Products/video3.jpg",
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
