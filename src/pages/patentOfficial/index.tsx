import {useNavigate} from 'react-router-dom';

import {PaginatedTable, withDrawer} from '@/components';
import {TOfficialListItemWithAction} from '@/types';
import {useGetOfficials, useUpdateOfficialVerificationStatus} from '@/services';
import {ROUTES_NAMES} from '@/utils';

const PatentOfficialPage = () => {
  const navigate = useNavigate();
  const {data = {officials: [], total: 0}, handlePageChange, handlePageSizeChange, page, pageSize, onSearch} = useGetOfficials({showLoading: true, officialType: 'patent'});
  const {mutate} = useUpdateOfficialVerificationStatus({showLoading: true});

  const updateStatus = (official: TOfficialListItemWithAction) => {
    mutate({officialId: official._id, verificationStatus: !official.verified});
  };

  return (
    <PaginatedTable<TOfficialListItemWithAction>
      data={data.officials}
      headers={['Profile', 'ID', 'Name', 'Desgination', 'Status', 'Details']}
      columns={['profileImage', 'officialId', 'name', 'designation', 'verified', 'action']}
      searchBarProps={{onSearch}}
      title='Patent Official'
      cellAttrs={{
        profileImage: {type: 'avatar'},
        verified: {type: 'switch', callback: official => updateStatus(official)},
        action: {type: 'button', callback: ({_id}) => navigate(`${ROUTES_NAMES.PATENT_OFFICIAL}/${_id}`)},
      }}
      page={page}
      pageSize={pageSize}
      handlePageChange={handlePageChange}
      handlePageSizeChange={handlePageSizeChange}
      total={data.total}
    />
  );
};

export default withDrawer(PatentOfficialPage);
