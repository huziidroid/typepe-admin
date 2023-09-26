import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

import InputField, {IInputFieldProps} from './InputField';

export interface IInputFormFieldProps extends Omit<IInputFieldProps, 'value' | 'onChange' | 'error'> {
  name: string;
}

const InputFormField = (props: IInputFormFieldProps) => {
  const {name, ...rest} = props;

  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onBlur, onChange, value}, fieldState: {error}}) => {
        return <InputField id={name} name={name} error={!!error} errorMsg={error?.message} onBlur={onBlur} onChange={onChange} value={value} {...rest} />;
      }}
    />
  );
};

export default InputFormField;
