import {TextField, TextFieldProps} from '@mui/material';
import React, {ChangeEvent} from 'react';

import {StyledFormControl, StyledFormLabel} from './styles';
import CustomInputAdornment from './components/CustomInputAdornment';
import {Controller, useFormContext} from 'react-hook-form';

export interface IFileInputProps extends Omit<TextFieldProps<'outlined'>, 'variant' | 'file' | 'name' | 'value' | 'onChange'> {
  startAdornment?: string | React.ReactNode;
  endAdornment?: string | React.ReactNode;
  accept?: string;
  name: string;
  handleOnChange?: (file: File) => void;
}

const FileInput = (props: IFileInputProps) => {
  const {endAdornment, startAdornment, label, name, handleOnChange, ...rest} = props;
  const {control} = useFormContext();
  return (
    <StyledFormControl>
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur}}) => (
          <TextField
            variant='outlined'
            hiddenLabel
            fullWidth
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.files?.length && e.target.files.length > 0) {
                onChange(e.target.files[0]);
                handleOnChange && handleOnChange(e.target.files[0]);
              }
            }}
            type='file'
            inputProps={{accept: '.docx'}}
            onBlur={onBlur}
            InputProps={{
              ...(startAdornment && {startAdornment: <CustomInputAdornment position='start' component={startAdornment} />}),
              ...(endAdornment && {endAdornment: <CustomInputAdornment position='end' component={endAdornment} />}),
            }}
            {...rest}
          />
        )}
      />
    </StyledFormControl>
  );
};

export default FileInput;
