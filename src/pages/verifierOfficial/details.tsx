import {Stack} from '@mui/material';
import {useParams} from 'react-router-dom';

import {BackActionWithTitle, withDrawer} from '@/components';
import {useGetOfficialDetails} from '@/services';
import {TOfficial} from '@/types';

const VerifierOfficialDetails = () => {
  const {_id: officialId = ''} = useParams();
  const {data = {}} = useGetOfficialDetails({showLoading: true, officialId});

  const {firstName, lastName} = data as TOfficial;
  const name = `${firstName} ${lastName}`;

  return (
    <Stack>
      <BackActionWithTitle title={name} />
    </Stack>
  );
};

export default withDrawer(VerifierOfficialDetails);
