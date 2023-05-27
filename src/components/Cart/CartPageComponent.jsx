import { useSelector } from 'react-redux';

import { OrderDeliveryForm } from '../Forms';
import { CartList } from './CartList/CartList';
import { selectCart } from '../../redux/cart/selectors';

import s from './CartPageComponent.module.scss';

export const CartPageComponent = () => {
  const cart = useSelector(selectCart);

  return (
    <main className={s.main}>
      <OrderDeliveryForm />
      {cart.length > 0 ? <CartList /> : <p className={s.emptyCart}>Cart is empty</p>}
    </main>
  );
};
