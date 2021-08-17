export let remoteItems = [
  {
    id: 0,
    title: "producto1",
    price: 300,
    category: "libros",
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
  {
    id: 1,
    title: "producto2",
    price: 400,
    category: "videos",
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
  {
    id: 2,
    title: "producto3",
    category: "libros",
    price: 500,
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
  {
    id: 3,
    title: "producto4",
    category: "videos",
    price: 600,
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
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
