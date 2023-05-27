export const totalPrice = products => {
  return products.reduce((acc, product) => acc + product.price * product.amount, 0);
};
