const products = [
  {
    id: "1",
    name: "Iphone 12",
    price: 1800,
    category: "celular",
    img: "https://i.blogs.es/be13bf/1366_2000/500_500.jpeg",
    stock: 25,
    description: "Descripción",
  },
  {
    id: "3",
    name: "Notebook Sansumg 12",
    price: 800,
    category: "notebook",
    img: "https://i.blogs.es/be13bf/1366_2000/500_500.jpeg",
    stock: 10,
    description: "Descripción",
  },
  {
    id: "3",
    name: "Tablet Nokia 12",
    price: 400,
    category: "tablet",
    img: "https://i.blogs.es/be13bf/1366_2000/500_500.jpeg",
    stock: 10,
    description: "Descripción",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  })
}

export const getProductsByCategory = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category));
      }, 500);
    });
  };
