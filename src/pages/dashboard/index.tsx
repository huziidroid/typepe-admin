import {Stack, Typography} from '@mui/material';
import {useState} from 'react';

import StatCard from './components/StatCard';
import {DateInput, withDrawer} from '@/components';
import {CardContainer, RowContainer} from './styles';
import {FilterInitailState, FilterStateType, useGetDashboardCardInfo} from './utils';

const Dashboard = () => {
  const [filters, setFilters] = useState<FilterStateType>(FilterInitailState);
  const cards = useGetDashboardCardInfo({startDate: filters.startDate?.unix() || null, endDate: filters.endDate?.unix() || null});

  return (
    <Stack spacing={3}>
      <RowContainer>
        <Typography variant='h3' component='h3' mr={3}>
          Dashboard
        </Typography>
        <RowContainer display='flex' flexDirection='row'>
          <DateInput placeholder='Start date' value={filters.startDate} handleOnChange={value => setFilters({...filters, startDate: value})} formControlProps={{sx: {mr: 2}}} />
          <DateInput placeholder='End date' value={filters.endDate} handleOnChange={value => setFilters({...filters, endDate: value})} />
        </RowContainer>
      </RowContainer>

      <CardContainer>
        {cards.map((card, i) => (
          <StatCard key={card.label + i.toString()} count={card.count} label={card.label} icon={card.icon} navigateTo={card.navigateTo} />
        ))}
      </CardContainer>
    </Stack>
  );
};

export default withDrawer(Dashboard);
