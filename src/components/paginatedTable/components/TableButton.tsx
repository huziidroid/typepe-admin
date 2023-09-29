import React from 'react';

import {Button, ButtonProps} from '@mui/material';

export interface ITableButtonProps extends Omit<ButtonProps, 'children'> {
  title?: string;
}

const TableButton = (props: ITableButtonProps) => {
  const {title, ...rest} = props;

  return (
    <Button variant='contained' size='large' {...rest}>
      {title}
    </Button>
  );
};

export default TableButton;
