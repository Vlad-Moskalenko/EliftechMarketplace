import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './components/Layouts';
import { ProductsList } from './components/Marketplace/ProductsList/ProductsList';

const MarketplacePage = lazy(() => import('./pages/MarketplacePage/MarketplacePage'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<MarketplacePage />}>
            <Route path="/:market" element={<ProductsList />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
