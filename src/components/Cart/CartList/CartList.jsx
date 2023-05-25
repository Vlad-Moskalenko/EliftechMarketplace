import { useSelector } from 'react-redux';
import { selectCart } from '../../../redux/cart/selectors';
import { CartItem } from '../CartItem/CartItem';

import s from './CartList.module.scss';

export const CartList = () => {
  const products = useSelector(selectCart);
  return (
    <ul className={s.list}>
      {products.map(product => (
        <CartItem key={product._id} product={product} />
      ))}
    </ul>
  );
};
