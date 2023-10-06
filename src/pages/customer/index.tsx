import {useNavigate} from 'react-router-dom';

import {PaginatedTable, withDrawer} from '@/components';
import {useGetCustomers} from '@/services';
import {TCustomerListItemWithAction} from '@/types';
import {ROUTES_NAMES} from '@/utils';

const Customers = () => {
  const {data = {customers: [], total: 0}, page, pageSize, handlePageChange, handlePageSizeChange, onSearch} = useGetCustomers({showLoading: true});

  const navigate = useNavigate();

  return (
    <PaginatedTable<TCustomerListItemWithAction>
      title='Customers'
      data={data.customers}
      headers={['Profile', 'ID', 'Name', 'Phone Number', 'Email', 'Action']}
      columns={['profileImage', 'customerId', 'name', 'phoneNumber', 'email', 'action']}
      cellAttrs={{profileImage: {type: 'avatar'}, action: {type: 'button', callback: ({_id}) => navigate(`${ROUTES_NAMES.CUSTOMER}/${_id}`)}}}
      searchBarProps={{onSearch}}
      handlePageChange={handlePageChange}
      handlePageSizeChange={handlePageSizeChange}
      page={page}
      pageSize={pageSize}
      total={data.total}
    />
  );
};

export default withDrawer(Customers);
