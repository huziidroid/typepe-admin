import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email!').required('Please enter your email!'),
  password: yup.string().required('Please enter password'),
});
