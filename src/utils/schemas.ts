import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Please enter your email'),
  // password: yup.string().required('Password is required').min(8, 'Password is too short - should be 8 chars minimum.'),
  password: yup.string().required('Password is required'),
});

export const productSchema = yup.object().shape({
  title: yup.string().required('Title is a required field'),
  numberOfParties: yup.number().required('Number of parties is a required field'),
  productPrice: yup.number().required('Product Price is a required field'),
});
