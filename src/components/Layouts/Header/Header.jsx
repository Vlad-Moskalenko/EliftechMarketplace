import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';

export const Header = () => {
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
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" className={({ isActive }) => (isActive ? 'active' : 'link')}>
              Order History
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
