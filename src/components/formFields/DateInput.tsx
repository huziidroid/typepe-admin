import {Dayjs} from 'dayjs';
import {When} from 'react-if';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {BaseTextFieldProps, FormControlProps, TextField, TextFieldProps} from '@mui/material';

import {StyledFormControl, StyledFormLabel} from './styles';

export interface IDatePickerProps {
  placeholder?: string;
  label?: string;
  value: Dayjs | null;
  handleOnChange: (val: Dayjs | null) => void;
  sx?: BaseTextFieldProps['sx'];
  formControlProps?: FormControlProps;
}

const DateInput = (props: IDatePickerProps) => {
  const {placeholder = 'dd/mm/yyyy', label, handleOnChange, value, sx, formControlProps} = props;

  return (
    <StyledFormControl {...formControlProps}>
      <When condition={label}>
        <StyledFormLabel>{label}</StyledFormLabel>
      </When>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          inputFormat='DD/MM/YYYY'
          value={value}
          onChange={value => {
            if (handleOnChange && value) handleOnChange(value);
          }}
          renderInput={(params: TextFieldProps) => (
            <TextField
              fullWidth
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder,
              }}
              sx={sx}
            />
          )}
        />
      </LocalizationProvider>
    </StyledFormControl>
  );
};

export default DateInput;
