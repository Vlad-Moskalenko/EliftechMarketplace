import { useEffect, useState } from 'react';
import { MarketsBar, ProductsList } from '../../components/Marketplace';
import { marketApi } from '../../services/axiosConfig';

import s from './HomePage.module.scss';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [markets, setMarkets] = useState([]);

  const handleMarketClick = ({ target }) => {
    marketApi.get(`/products/${target.id}`).then(({ data }) => setProducts(data));
  };

  useEffect(() => {
    marketApi.get('/products').then(({ data }) => setProducts(data));

    marketApi.get('/products/markets').then(({ data }) => setMarkets(data));
  }, []);

  return (
    <main className={s.main}>
      <MarketsBar onClick={handleMarketClick} markets={markets} />
      <ProductsList products={products} />
    </main>
  );
};

export default HomePage;
