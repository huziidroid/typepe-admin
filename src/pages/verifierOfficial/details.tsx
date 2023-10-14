// import {useMemo} from 'react';
import {Grid, Stack} from '@mui/material';
import {useParams} from 'react-router-dom';

import {BackActionWithTitle, ProfileCard, withDrawer} from '@/components';
import {useGetOfficialDetails} from '@/services';
import {getOfficialInfo} from '@/utils';

const VerifierOfficialDetails = () => {
  const {_id: officialId = ''} = useParams();
  const {data} = useGetOfficialDetails({showLoading: true, officialId});

  const {info, profileAvatar} = getOfficialInfo(data);
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

export default withDrawer(VerifierOfficialDetails);
