import {Toolbar, Typography} from '@mui/material';

import {Row} from '@/styles';
import {Searchbar, SelectInput} from '@/components';
import TableButton, {ITableButtonProps} from './TableButton';
import {ISelectInputProps} from '@/components/formFields/SelectInput';
import {ISearchBarProps} from '@/components/searchbar';

interface IEnhancedToolbar {
  title?: string;
  buttonProps?: ITableButtonProps;

  selectInputProps?: ISelectInputProps;
  searchBarProps?: ISearchBarProps;
}

function EnhancedTableToolbar(props: IEnhancedToolbar) {
  const {title, buttonProps, selectInputProps = {}, searchBarProps = {}} = props;
  const {onSearch, ...restSearchbarProps} = searchBarProps as ISearchBarProps;
  const {data = [], ...restSelectInputProps} = selectInputProps as ISelectInputProps;

  return (
    <Toolbar>
      <Typography variant='h5' component='h5' width='20%'>
        {title}
      </Typography>

      <Row width='100%' justifyContent='flex-end'>
        {onSearch !== undefined && <Searchbar onSearch={onSearch} {...restSearchbarProps} sx={{mr: 2}} />}
        {data.length > 0 && <SelectInput data={data} {...restSelectInputProps} formControlProps={{sx: {height: '45px'}}} />}
        {buttonProps?.title && <TableButton {...buttonProps} sx={{ml: 2}} />}
      </Row>
    </Toolbar>
  );
}

export default EnhancedTableToolbar;
