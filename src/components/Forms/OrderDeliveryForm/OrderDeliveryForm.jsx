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
      await addOrderDelivery({ ...values, order: cart });

      actions.resetForm();
      dispatch(clearCart());
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
        E-mail
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          value={email}
          placeholder="E-mail"
          required
        />
        {errors.email && touched.email && <p>{errors.email}</p>}
      </label>
      <label className={s.label}>
        Address
        <input
          type="text"
          name="address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={address}
          placeholder="Address"
          required
        />
        {errors.address && touched.address && <p>{errors.address}</p>}
      </label>
      <label className={s.label}>
        Phone
        <input
          type="number"
          name="phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={phone}
          placeholder="phone"
          required
        />
        {errors.phone && touched.phone && <p>{errors.phone}</p>}
      </label>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={name}
          placeholder="name"
          required
        />
        {errors.name && touched.name && <p>{errors.name}</p>}
      </label>
      <button type="submit" disabled={!isValid || !dirty || isSubmitting}>
        Submit
      </button>
    </form>
  );
};
