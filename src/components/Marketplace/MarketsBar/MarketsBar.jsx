import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMarkets } from 'src/services/fetchMarkets';

import s from './MarketBar.module.scss';

export const MarketsBar = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    getMarkets().then(data => setMarkets(data));
  }, []);

  return (
    <aside className={s.sideBar}>
      <ul className={s.list}>
        {markets.map(market => (
          <li key={market}>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to={market}>
              {market}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
