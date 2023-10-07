import {Stack} from '@mui/material';
import {useParams} from 'react-router-dom';

import {BackActionWithTitle, withDrawer} from '@/components';
import {useGetCustomerDetails} from '@/services';
import {TCustomer} from '@/types';

const CustomerDetails = () => {
  const {_id: customerId = ''} = useParams();
  const {data = {}} = useGetCustomerDetails({showLoading: true, customerId});

  const {firstName, lastName} = data as TCustomer;
  const name = `${firstName} ${lastName}`;

  return (
    <Stack>
      <BackActionWithTitle title={name} />
    </Stack>
  );
};

export default withDrawer(CustomerDetails);
