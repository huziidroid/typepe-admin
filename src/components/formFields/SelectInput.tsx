import {Select, MenuItem, SelectProps, InputLabel, FormControlProps} from '@mui/material';
import {When} from 'react-if';

import ErrorText from './ErrorText';
import {TStandardObject} from '@/types';
import {StyledFormControl} from './styles';

export interface ISelectInputProps extends SelectProps<string | number> {
  data: TStandardObject[];
  errorMsg?: string;
  formControlProps?: FormControlProps;
}

const SelectInput = (props: ISelectInputProps) => {
  const {errorMsg, placeholder = 'Select', formControlProps, label, data, ...rest} = props;

  return (
    <StyledFormControl {...formControlProps}>
      <When condition={label !== null}>
        <InputLabel id='select-input-label'>{label}</InputLabel>
      </When>

      <Select labelId='select-input-label' placeholder={placeholder} label={label} {...rest}>
        <MenuItem disabled value=''>
          <em>{placeholder}</em>
        </MenuItem>

        {data.map(dataItem => (
          <MenuItem key={dataItem.value} value={dataItem.value}>
            {dataItem.label}
          </MenuItem>
        ))}
      </Select>

      <ErrorText message={errorMsg} />
    </StyledFormControl>
  );
};

export default SelectInput;
