import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Please enter your email'),
  // password: yup.string().required('Password is required').min(8, 'Password is too short - should be 8 chars minimum.'),
  password: yup.string().required('Password is required'),
});
