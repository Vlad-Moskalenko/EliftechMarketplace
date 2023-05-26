import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../redux/cart/cartSlice';
import { selectCart } from '../../../redux/cart/selectors';
import { marketApi } from '../../../services/axiosConfig';

import s from './OrderDeliveryForm.module.scss';

const initialDeliveryState = {
  email: '',
  address: '',
  name: '',
  phone: '',
};

export const OrderDeliveryForm = () => {
  const [deliveryData, setDeliveryData] = useState(initialDeliveryState);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleInputChange = ({ target }) => {
    setDeliveryData({ ...deliveryData, order: cart, [target.name]: target.value });
  };

  const handleOrderSubmit = e => {
    e.preventDefault();

    marketApi
      .post('/orders', deliveryData)
      .then(() => {
        setDeliveryData(initialDeliveryState);
        dispatch(clearCart());
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const { email, address, name, phone } = deliveryData;
  return (
    <form onSubmit={handleOrderSubmit} className={s.form}>
      <label className={s.label}>
        E-mail
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={email}
          placeholder="E-mail"
          required
        />
      </label>
      <label className={s.label}>
        Address
        <input
          type="text"
          name="address"
          onChange={handleInputChange}
          value={address}
          placeholder="Address"
          required
        />
      </label>
      <label className={s.label}>
        phone
        <input
          type="number"
          name="phone"
          onChange={handleInputChange}
          value={phone}
          placeholder="phone"
          required
        />
      </label>
      <label className={s.label}>
        name
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={name}
          placeholder="name"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
