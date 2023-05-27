import { useSelector } from 'react-redux';
import { selectCart } from 'src/redux/cart/selectors';
import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';
import { totalPrice } from '../../../utils/totalPrice';

export const Header = () => {
  const cart = useSelector(selectCart);

  return (
    <header className={s.header}>
      <nav>
        <ul className={s.navList}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'link')}>
              Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : 'link')}>
              Cart <span className={s.cart}>{cart.length > 0 && cart.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" className={({ isActive }) => (isActive ? 'active' : 'link')}>
              Order History
            </NavLink>
          </li>
        </ul>
      </nav>
      {cart.length > 0 && <span className={s.totalPrice}>Total price: {totalPrice(cart)}$</span>}
    </header>
  );
};
