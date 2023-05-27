import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .transform(currentValue => {
      return currentValue ? currentValue.replace(/ /g, '').replace(/_/g, '') : '';
    })
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^\+?(\d{1,3})?[ -]?\(?\d{1,3}\)?[ -]?\d{1,4}[ -]?\d{1,4}[ -]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required('Required'),
  address: Yup.string().required('Address is required'),
});
