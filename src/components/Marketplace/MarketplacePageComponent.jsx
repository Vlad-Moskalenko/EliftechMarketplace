import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { MarketsBar } from './MarketsBar/MarketsBar';

import s from './MarketplacePageComponent.module.scss';
import { ProductsList } from './ProductsList/ProductsList';

export const MarketplacePageComponent = () => {
  const { market } = useParams();

  return (
    <main className={s.main}>
      <MarketsBar />
      {market ? <Outlet /> : <ProductsList />}
    </main>
  );
};
