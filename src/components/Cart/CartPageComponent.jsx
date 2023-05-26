import { OrderDeliveryForm } from '../Forms';
import { CartList } from './CartList/CartList';

import s from './CartPageComponent.module.scss';

export const CartPageComponent = () => {
  return (
    <main className={s.main}>
      <OrderDeliveryForm />
      <CartList />
    </main>
  );
};
