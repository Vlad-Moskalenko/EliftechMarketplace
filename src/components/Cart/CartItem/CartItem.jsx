export const CartItem = ({ product }) => {
  const { title, market, price } = product;
  return (
    <li>
      <article>
        <h2>{title}</h2>
        <p>{market}</p>
      </article>
    </li>
  );
};
