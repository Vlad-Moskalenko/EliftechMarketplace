import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMarkets } from 'src/services/fetchMarkets';

export const MarketsBar = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    getMarkets().then(data => setMarkets(data));
  }, []);

  return (
    <aside>
      <ul>
        {markets.map((market, index) => (
          <li key={index}>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={market}>
              {market}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
