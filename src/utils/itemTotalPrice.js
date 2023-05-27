export const itemTotalPrice = (price, amount) => {
  const itemTotalPrice = price * amount;
  return itemTotalPrice.toFixed(2);
};
