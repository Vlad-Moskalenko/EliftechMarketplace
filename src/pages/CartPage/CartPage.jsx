import { CartList, DeliveryForm } from '../../components/Cart';

import s from './CartPage.module.scss';

const CartPage = () => {
  return (
    <main className={s.main}>
      <DeliveryForm />
      <CartList />
    </main>
  );
};

export default CartPage;
