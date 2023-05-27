import { useDispatch } from 'react-redux';

import { changeAmount, deleteProduct } from 'src/redux/cart/cartSlice';
import { itemTotalPrice } from '../../../utils';

import s from './CartItem.module.scss';

export const CartItem = ({ product: { _id, amount, title, price, market, imgUrl } }) => {
  const dispatch = useDispatch();

  const changeProductAmount = operator => {
    dispatch(changeAmount({ _id, operator }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteProduct(_id));
  };

  return (
    <li>
      <article className={s.card}>
        <button className={s.deleteBtn} onClick={handleDeleteClick} type="button"></button>
        <div className={s.imgWrapper}>
          <p className={s.marketTitle}>{market}</p>
          <img src={imgUrl} alt={title} />
          <h2 className={s.title}>
            {title} <span className={s.price}>{price}$</span>
          </h2>
        </div>

        <div>
          <button onClick={() => changeProductAmount('-')} type="button" disabled={amount <= 1}>
            -
          </button>
          <span className={s.amount}>{amount}</span>
          <button onClick={() => changeProductAmount('+')} type="button">
            +
          </button>
          <p>Total price: {itemTotalPrice(price, amount)}$</p>
        </div>
      </article>
    </li>
  );
};
