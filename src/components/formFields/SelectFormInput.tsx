import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

import SelectInput, {ISelectInputProps} from './SelectInput';

interface ISelectFormInputProps extends Omit<ISelectInputProps, 'name' | 'value' | 'onChange'> {
  name: string;
}

const SelectFormInput = (props: ISelectFormInputProps) => {
  const {name, ...rest} = props;

  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
        <SelectInput error={!!error} errorMsg={error?.message} onBlur={onBlur} value={value} name={name} id={name} onChange={onChange} {...rest} />
      )}
    />
  );
};

export default SelectFormInput;
