import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './components/Layouts';
import { ProductsList } from './components/Marketplace';

import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage'));
const CouponsPage = lazy(() => import('./pages/CouponsPage/CouponsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />}>
            <Route path="/:market" element={<ProductsList />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/coupon" element={<CouponsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
