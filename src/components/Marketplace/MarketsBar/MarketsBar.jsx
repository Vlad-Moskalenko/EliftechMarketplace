import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { marketApi } from '../../../services/axiosConfig';

export const MarketsBar = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    marketApi.get('/products/markets').then(({ data }) => setMarkets(data));
  }, []);

  return (
    <aside>
      <ul>
        {markets.map((market, index) => (
          <li key={index}>
            <NavLink to={market}>{market}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
