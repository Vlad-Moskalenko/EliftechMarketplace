import * as Yup from 'yup';

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegexp = /^\+?(\d{1,3})?[ -]?\(?\d{1,3}\)?[ -]?\d{1,4}[ -]?\d{1,4}[ -]?\d{1,9}$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().matches(emailRegexp, 'Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegexp, 'Invalid phone number')
    .required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});
