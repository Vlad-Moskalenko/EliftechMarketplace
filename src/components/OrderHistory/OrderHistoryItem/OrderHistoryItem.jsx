export const OrderHistoryItem = ({ order }) => {
  const {
    name,
    order: { title },
  } = order;
  return (
    <li>
      {name} {title}
    </li>
  );
};
