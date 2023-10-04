import {PaginatedTable, withDrawer} from '@/components';

import React from 'react';

type TVerifierOfficial = {
  officialId: string;
  name: string;
  phoneNumber: string;
  designation: string;
  verified: boolean;
  showDetails: string; // used for button text
};

const DummyData: TVerifierOfficial[] = [
  {
    name: 'Huzaifa',
    officialId: 'PO-32423',
    phoneNumber: '+92 3312220373',
    designation: 'Senior Officer',
    verified: true,
    showDetails: 'View',
  },
  {
    name: 'Huzaifa',
    officialId: 'PO-32423',
    phoneNumber: '+92 3312220373',
    designation: 'Senior Officer',
    verified: true,
    showDetails: 'View',
  },
  {
    name: 'Huzaifa',
    officialId: 'PO-32423',
    phoneNumber: '+92 3312220373',
    designation: 'Senior Officer',
    verified: true,
    showDetails: 'View',
  },
  {
    name: 'Huzaifa',
    officialId: 'PO-32423',
    phoneNumber: '+92 3312220373',
    designation: 'Senior Officer',
    verified: true,
    showDetails: 'View',
  },
  {
    name: 'Huzaifa',
    officialId: 'PO-32423',
    phoneNumber: '+92 3312220373',
    designation: 'Senior Officer',
    verified: false,
    showDetails: 'View',
  },
  {
    name: 'Huzaifa',
    officialId: 'PO-32423',
    phoneNumber: '+92 3312220373',
    designation: 'Senior Officer',
    verified: false,
    showDetails: 'View',
  },
  {
    name: 'Huzaifa',
    officialId: 'PO-32423',
    phoneNumber: '+92 3312220373',
    designation: 'Senior Officer',
    verified: false,
    showDetails: 'View',
  },
];

const VerifierOfficialPage = () => {
  return (
    <PaginatedTable<TVerifierOfficial>
      data={DummyData}
      headers={['ID', 'Name', 'Phone Number', 'Desgination', 'Verified', 'Details']}
      columns={['officialId', 'name', 'phoneNumber', 'designation', 'verified', 'showDetails']}
      searchBarProps={{onSearch: () => {}}}
      title='Verifier Official'
      toolbarButtonProps={{title: 'Add'}}
      cellAttrs={{
        officialId: {type: 'text'},
        name: {type: 'text'},
        phoneNumber: {type: 'text'},
        verified: {type: 'switch', callback: official => alert(JSON.stringify(official))},
        showDetails: {type: 'button', callback: () => {}},
      }}
    />
  );
};

export default withDrawer(VerifierOfficialPage);
