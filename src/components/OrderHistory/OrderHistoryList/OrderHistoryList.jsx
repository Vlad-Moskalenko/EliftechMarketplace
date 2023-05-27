import { OrderHistoryItem } from '../OrderHistoryItem/OrderHistoryItem';

export const OrderHistoryList = ({ ordersHistory }) => {
  return (
    <ul className={s.list}>
      {ordersHistory.map(order => (
        <OrderHistoryItem order={order} key={order._id} />
      ))}
    </ul>
  );
};
