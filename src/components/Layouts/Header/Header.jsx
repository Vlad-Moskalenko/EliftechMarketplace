import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.navList}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? `${s.active}` : '')}>
              Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => (isActive ? `${s.active}` : '')}>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" className={({ isActive }) => (isActive ? `${s.active}` : '')}>
              Order History
            </NavLink>
          </li>
          <li>
            <NavLink to="/coupons" className={({ isActive }) => (isActive ? `${s.active}` : '')}>
              Coupons
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
