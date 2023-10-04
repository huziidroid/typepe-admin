import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {Button, Grid, Stack, Typography} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';

import {BrandLogoContainer, FieldStack} from './styles';
import {loginSchema} from '@/utils';
import {InputFormField} from '@/components';
import {AppLogo} from '@/assets';
import {TLoginPayload} from '@/types';
import {useLogin} from '@/services';

const LoginPage = () => {
  const methods = useForm<TLoginPayload>({defaultValues: {email: 'huzaifa@gmail.com', password: '323232'}, mode: 'onChange', resolver: yupResolver(loginSchema)});

  const {mutate} = useLogin({showLoading: true});

  const onSubmit = (data: TLoginPayload) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <Grid container>
        <Grid item xs={6} lg={8}>
          <BrandLogoContainer>
            <AppLogo />
          </BrandLogoContainer>
        </Grid>

        <Grid item xs={6} lg={4}>
          <FieldStack spacing={8}>
            <Stack spacing={1}>
              <Typography variant='h2'>Welcome!</Typography>
              <Typography variant='subtitle1'>Login to your Admin Panel</Typography>
            </Stack>

            <Stack spacing={1}>
              <InputFormField name='email' label='Email' placeholder='Enter your email' />
              <InputFormField name='password' label='Password' type='password' placeholder='Enter your password' />
            </Stack>
            <Button variant='contained' onClick={methods.handleSubmit(onSubmit)} disabled={!methods.formState.isValid}>
              Login
            </Button>
          </FieldStack>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default LoginPage;
