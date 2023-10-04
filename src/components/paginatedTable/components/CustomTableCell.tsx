import React from 'react';
import {Avatar, Checkbox, Switch} from '@mui/material';

import {TCellAction} from '@/types';
import TableButton from './TableButton';
import {RowCell} from '../styles';

interface ICustomCellProps<T, R> extends TCellAction<R> {
  value: T;
  resource: R;
}

function CustomTableCell<T, R>({type = 'text', value, resource, callback, component}: ICustomCellProps<T, R>) {
  const onAction = () => {
    if (callback) callback(resource);
  };

  switch (type) {
    case 'avatar':
      return (
        <RowCell>
          <Avatar alt='profile' onClick={onAction} src={value as string} />
        </RowCell>
      );
    case 'button':
      return (
        <RowCell>
          <TableButton size='small' title={value as string} />
        </RowCell>
      );
    case 'custom':
      return <RowCell>{component && component(resource)}</RowCell>;

    case 'checkbox':
      return (
        <RowCell>
          <Checkbox checked={value as boolean} onChange={onAction} />
        </RowCell>
      );
    case 'switch':
      return (
        <RowCell>
          <Switch checked={value as boolean} onChange={onAction} />
        </RowCell>
      );
    case 'text':
      return <RowCell>{value as string}</RowCell>;
    default:
      return <RowCell>{value as string}</RowCell>;
  }
}

export default CustomTableCell;
