import {TextFieldProps, TextField, InputAdornment, IconButton, InputBaseComponentProps} from '@mui/material';
import React, {useMemo, useState} from 'react';
import {Else, If, When} from 'react-if';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import InputMask from './InputMask';
import {StyledFormControl, StyledFormLabel} from './styles';
import ErrorText from './ErrorText';

export interface IInputFieldProps extends Omit<TextFieldProps<'outlined'>, 'variant'> {
  startAdornment?: string | React.ReactNode;
  endAdornment?: string | React.ReactNode;
  mask?: string;
  errorMsg?: string;
}

type CustomInputAdornmentProps = {
  position: 'start' | 'end';
  component: string | React.ReactNode;
};

const CustomInputAdornment = ({position, component}: CustomInputAdornmentProps) => {
  return <InputAdornment position={position}>{component}</InputAdornment>;
};

const InputField = (props: IInputFieldProps) => {
  const {startAdornment, endAdornment, errorMsg, label, mask, type, ...rest} = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPasswordType = type === 'password';

  const togglePasswordIcon = () => setIsPasswordVisible(!isPasswordVisible);

  const PasswordIconComponent = useMemo(() => {
    return (
      <IconButton onClick={togglePasswordIcon}>
        <If condition={isPasswordVisible}>
          <VisibilityOutlinedIcon fontSize='medium' />
          <Else>
            <VisibilityOffOutlinedIcon fontSize='medium' />
          </Else>
        </If>
      </IconButton>
    );
  }, [isPasswordVisible]);

  return (
    <StyledFormControl>
      <When condition={label !== null}>
        <StyledFormLabel>{label}</StyledFormLabel>
      </When>

      <TextField
        {...rest}
        variant='outlined'
        hiddenLabel
        fullWidth
        type={isPasswordVisible ? 'text' : type}
        InputProps={{
          ...(mask && {inputComponent: InputMask}),
          ...(mask && {inputProps: {mask: mask, ...(rest as InputBaseComponentProps)}}),
          ...(startAdornment && {
            startAdornment: <CustomInputAdornment position='start' component={startAdornment} />,
          }),
          ...(endAdornment && {
            endAdornment: <CustomInputAdornment position='end' component={endAdornment} />,
          }),
          // for password type handling
          ...(isPasswordType && {
            endAdornment: <CustomInputAdornment position='end' component={PasswordIconComponent} />,
          }),
        }}
      />
      <ErrorText message={errorMsg} />
    </StyledFormControl>
  );
};

export default InputField;