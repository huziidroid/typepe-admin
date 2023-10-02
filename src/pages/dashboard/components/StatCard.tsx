import React from 'react';
import {Box, CardContent, CardProps, Typography} from '@mui/material';
import {ArrowCircleRight} from '@mui/icons-material';

import {RowBetween} from '@/styles';
import {CustomCardActions, IconContainer, Main, ViewResourceText} from '../styles';

interface IStatCardProps extends CardProps {
  label: string;
  count: number;
  icon: React.ReactNode;
  navigateTo?: () => void;
}

const StatCard = (props: IStatCardProps) => {
  const {count, icon, label, navigateTo, ...rest} = props;

  return (
    <Main {...rest}>
      <CardContent>
        <RowBetween>
          <Box>
            <Typography variant='h3' component='h3'>
              {count}
            </Typography>
            <Typography variant='subtitle1' component='p'>
              {label}
            </Typography>
          </Box>
          <IconContainer>{icon}</IconContainer>
        </RowBetween>
      </CardContent>

      <CustomCardActions onClick={navigateTo}>
        <ViewResourceText>{`View all ${label}`}</ViewResourceText>
        <ArrowCircleRight color='secondary' />
      </CustomCardActions>
    </Main>
  );
};

export default StatCard;
