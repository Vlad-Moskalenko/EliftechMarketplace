import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/cart/cartSlice';
import s from './ProductItem.module.scss';

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleBuyClick = () => {
    dispatch(addProduct(product));
  };

  const { price, title, imgUrl, rating, market, descr } = product;
  return (
    <li className={s.item}>
      <article className={s.card}>
        <h2>{title}</h2>
        <img src={imgUrl} alt={title} />
        <p>{descr}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <button onClick={handleBuyClick} type="button">
          Buy
        </button>
      </article>
    </li>
  );
};
