import {ChangeEvent, useState} from 'react';
import {InputAdornment, TextField, TextFieldProps} from '@mui/material';

import {SearchIcon} from '@/assets';
import {useDebounce} from '@/utils';

export interface ISearchBarProps extends Omit<TextFieldProps<'outlined'>, 'variant' | 'onChange' | 'value'> {
  onSearch: (queryString: string) => void;
}

const SearchBar = (props: ISearchBarProps) => {
  const {onSearch, size = 'small', placeholder = 'Search...', ...rest} = props;

  const [searchQuery, setSearchQuery] = useState('');
  const debounceSearch = useDebounce(onSearch);

  const handleInputChange = (event: ChangeEvent) => {
    const target = event.target as HTMLTextAreaElement;
    setSearchQuery(target.value as string);
    debounceSearch(target.value as string);
  };

  return (
    <TextField
      onChange={handleInputChange}
      variant='outlined'
      placeholder={placeholder}
      size={size}
      value={searchQuery}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
        style: {height: '45px', borderRadius: 6, ...rest.InputProps?.style},
      }}
      {...rest}
    />
  );
};

export default SearchBar;
