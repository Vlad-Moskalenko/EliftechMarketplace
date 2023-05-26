import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { addProduct, clearCart } from 'src/redux/cart/cartSlice';
import { selectCart } from 'src/redux/cart/selectors';

import s from './ProductItem.module.scss';

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const { market } = useParams();

  const handleBuyClick = () => {
    const chosenMarket = cart.length > 0 && cart[0].market;

    if (chosenMarket === product.market || cart.length === 0) {
      dispatch(addProduct({ ...product, amount: 1 }));
    } else {
      const res = confirm(
        `Sorry, but you couldn't add product from this market, because you already choose ${chosenMarket}. If you still want to add product from ${product.market}, you need to clear your cart. Do you want to clear your cart and add ${product.title} from ${product.market}?`
      );

      if (res) {
        dispatch(clearCart());
        dispatch(addProduct({ ...product, amount: 1 }));
      }
    }
  };

  const isAlreadyBought = () => cart.find(item => item._id === product._id);

  const { price, title, imgUrl, rating, descr, market: productMarket } = product;

  return (
    <li className={s.item}>
      <article className={s.card}>
        <h2>{title}</h2>
        <p>{descr}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        {!market && <p>{productMarket}</p>}
        {isAlreadyBought() ? (
          <NavLink to="/cart">Go to cart</NavLink>
        ) : (
          <button onClick={handleBuyClick} type="button">
            Buy
          </button>
        )}
      </article>
    </li>
  );
};
