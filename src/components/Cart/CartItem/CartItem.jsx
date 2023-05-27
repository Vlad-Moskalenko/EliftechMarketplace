import { useDispatch } from 'react-redux';
import { changeAmount, deleteProduct } from 'src/redux/cart/cartSlice';

export const CartItem = ({ product: { _id, amount, title, price, market } }) => {
  const dispatch = useDispatch();

  const changeProductAmount = operator => {
    dispatch(changeAmount({ _id, operator }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteProduct(_id));
  };

  return (
    <li>
      <article>
        <h2>{title}</h2>
        <button onClick={handleDeleteClick}>Delete</button>
        <p>{market}</p>
        <div>
          <button onClick={() => changeProductAmount('-')} type="button" disabled={amount <= 1}>
            -
          </button>
          <span>{amount}</span>
          <button onClick={() => changeProductAmount('+')} type="button">
            +
          </button>
        </div>
        <p>Total price: {price * amount}</p>
      </article>
    </li>
  );
};
