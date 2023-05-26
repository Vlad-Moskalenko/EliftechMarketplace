import { useState } from 'react';
import { marketApi } from '../../services/axiosConfig';

import { OrderHistoryForm } from '../Forms';
import { OrderHistoryList } from './OrderHistoryList/OrderHistoryList';

export const OrderHistoryPageComponent = () => {
  const [ordersHistory, setOrdersHistory] = useState([]);

  const getOrderHistory = userData => {
    console.log(userData);
    marketApi
      .get('/orders', { params: userData })
      .then(({ data }) => setOrdersHistory(data))
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <main>
      <OrderHistoryForm getOrderHistory={getOrderHistory} />
      <OrderHistoryList ordersHistory={ordersHistory} />
    </main>
  );
};
