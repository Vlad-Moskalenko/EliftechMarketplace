export const totalPrice = products => {
  const totalPrice = products.reduce((acc, product) => acc + product.price * product.amount, 0);
  return totalPrice.toFixed(2);
};
