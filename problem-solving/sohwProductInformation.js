var products = [
  {
    productName: 'Laptop',
    productId: 01,
    stock: 100,
  },
  {
    productName: 'Microphone',
    productId: 02,
    stock: 10,
  },
  {
    productName: 'Monitor',
    productId: 03,
    stock: 20,
  },
];

function productInformation(pId) {
  /* const restProduct = [];
      for (const product of products) {
          const name = product.productName;
          if (name.indexOf(productName) != -1) {
              restProduct.push(product)
          }
      }
   */
  const restProduct = [];
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    for (let key in element) {
      if (key == 'productId' && element[key] == pId) {
        restProduct.push(element);
      }
    }
  }

  return restProduct;
}

console.log(productInformation(02));
