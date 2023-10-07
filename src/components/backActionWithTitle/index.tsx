import React from 'react';
import {useNavigate} from 'react-router-dom';

import {IconButton, Typography} from '@mui/material';

import {ChevronLeftIcon, HeaderBar} from './styles';

interface IBackActionWithTitle {
  title: string;
}

const BackActionWithTitle = ({title}: IBackActionWithTitle) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <HeaderBar>
      <IconButton onClick={goBack}>
        <ChevronLeftIcon />
      </IconButton>

      <Typography variant='h5'>{title}</Typography>
    </HeaderBar>
  );
};

export default BackActionWithTitle;
