import { CartList } from '../../components/Cart';
import { OrderDeliveryForm } from '../../components/Forms';

import s from './CartPage.module.scss';

const CartPage = () => {
  return (
    <main className={s.main}>
      <OrderDeliveryForm />
      <CartList />
    </main>
  );
};

export default CartPage;
