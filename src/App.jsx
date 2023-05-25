import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './components/Layouts/SharedLayout';

import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage'));
const CouponsPage = lazy(() => import('./pages/CouponsPage/CouponsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/coupon" element={<CouponsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
