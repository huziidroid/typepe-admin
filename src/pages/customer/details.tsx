import {Grid, Stack} from '@mui/material';
import {useParams} from 'react-router-dom';

import {BackActionWithTitle, ProfileCard, withDrawer} from '@/components';
import {useGetCustomerDetails} from '@/services';

import {useMemo} from 'react';
import {getCustomerInfo} from './utils';

const CustomerDetails = () => {
  const {_id: customerId = ''} = useParams();
  const {data} = useGetCustomerDetails({showLoading: true, customerId});

  const {info, profileAvatar} = useMemo(() => getCustomerInfo(data), [data]);

  return (
    <Stack spacing={4}>
      <BackActionWithTitle title={'Back'} />
      <Grid container>
        <Grid item xs={4}>
          <ProfileCard cardInfo={info} profileImage={profileAvatar} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default withDrawer(CustomerDetails);
