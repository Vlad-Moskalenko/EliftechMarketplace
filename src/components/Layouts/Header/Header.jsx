import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.navList}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" className={({ isActive }) => (isActive ? 'active' : '')}>
              History
            </NavLink>
          </li>
          <li>
            <NavLink to="/coupons" className={({ isActive }) => (isActive ? 'active' : '')}>
              Coupons
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
