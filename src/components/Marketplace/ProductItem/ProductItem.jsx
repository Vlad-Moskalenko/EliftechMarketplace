import s from './ProductItem.module.scss';

export const ProductItem = ({ product }) => {
  const { price, title, imgUrl, rating, market, descr } = product;
  return (
    <li className={s.item}>
      <article className={s.card}>
        <h2>{title}</h2>
        <img src={imgUrl} alt={title} />
        <p>{descr}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
      </article>
    </li>
  );
};
