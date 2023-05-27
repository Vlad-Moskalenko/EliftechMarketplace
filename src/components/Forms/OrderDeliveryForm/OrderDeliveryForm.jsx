import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { clearCart } from 'src/redux/cart/cartSlice';
import { selectCart } from 'src/redux/cart/selectors';
import { addOrderDelivery } from 'src/services/fetchOrders';
import { validationSchema } from './validationSchema';

import s from './OrderDeliveryForm.module.scss';

const initialValues = {
  email: '',
  address: '',
  name: '',
  phone: '',
};

export const OrderDeliveryForm = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const orderDeliveryFormik = useFormik({
    initialValues,

    validationSchema,

    onSubmit: async (values, actions) => {
      if (cart.length > 0) {
        await addOrderDelivery({ ...values, order: cart });

        actions.resetForm();
        dispatch(clearCart());
      }
    },
  });

  const {
    values: { email, phone, address, name },
    isValid,
    isSubmitting,
    dirty,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = orderDeliveryFormik;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          value={email}
          placeholder="E-mail"
          className={s.input}
          required
        />
        {errors.email && touched.email && <span className={s.errorMsg}>{errors.email}</span>}
      </label>
      <label className={s.label}>
        <input
          type="text"
          name="address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={address}
          placeholder="Address"
          className={s.input}
          required
        />
        {errors.address && touched.address && <span className={s.errorMsg}>{errors.address}</span>}
      </label>
      <label className={s.label}>
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={phone}
          placeholder="Phone number"
          className={s.input}
          required
        />
        {errors.phone && touched.phone && <span className={s.errorMsg}>{errors.phone}</span>}
      </label>
      <label className={s.label}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={name}
          placeholder="Name"
          className={s.input}
          required
        />
        {errors.name && touched.name && <span className={s.errorMsg}>{errors.name}</span>}
      </label>
      <button
        className={s.buyBtn}
        type="submit"
        disabled={!isValid || !dirty || isSubmitting || !cart.length}
      >
        Buy
      </button>
    </form>
  );
};
