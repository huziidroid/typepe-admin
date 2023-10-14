import {Autocomplete, Checkbox, SxProps, TextField} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import {StyledFormControl, StyledFormLabel} from './styles';

interface IMultiSelectorInputProps {
  label?: string;
  placeholder?: string;
  data: string[];
  selectedValues: string[];
  onChange: (value: string[]) => void;
  sx?: SxProps;
  isOptionEqualToValue?: (option: string, value: string) => boolean;
}

function MultiSelectorInput(props: IMultiSelectorInputProps) {
  const {data = [], onChange, label, placeholder = 'Select', selectedValues, sx, isOptionEqualToValue} = props;

  return (
    <StyledFormControl>
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      <Autocomplete
        sx={sx}
        multiple
        options={data}
        fullWidth
        getOptionLabel={option => option}
        disableCloseOnSelect
        value={selectedValues}
        isOptionEqualToValue={isOptionEqualToValue}
        onChange={(e, val) => onChange(val)}
        renderInput={params => <TextField {...params} variant='outlined' placeholder={placeholder} />}
        renderOption={(props, option, {selected}) => (
          <li {...props}>
            <Checkbox icon={<CheckBoxOutlineBlankIcon fontSize='small' />} checkedIcon={<CheckBoxIcon fontSize='small' />} style={{marginRight: 8}} checked={selected} />
            {option}
          </li>
        )}
      />
    </StyledFormControl>
  );
}

export default MultiSelectorInput;
