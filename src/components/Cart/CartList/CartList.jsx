import { useSelector } from 'react-redux';
import { CartItem } from '../CartItem/CartItem';
import { selectCart } from 'src/redux/cart/selectors';

import s from './CartList.module.scss';

export const CartList = () => {
  const cartProducts = useSelector(selectCart);

  return (
    <ul className={s.list}>
      {cartProducts.map(product => (
        <CartItem key={product._id} product={product} />
      ))}
    </ul>
  );
};
