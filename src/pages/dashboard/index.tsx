import {PaginatedTable, withDrawer} from '@/components';
import TableButton from '@/components/paginatedTable/components/TableButton';
import {TableDataType} from '@/types';

import {Box, ButtonGroup} from '@mui/material';

type TAppointment = {
  _id: string;
  profile: string;
  appointmentId: string;
  patient: string;
  doctor: string;
  status: boolean;
};

const sampleProfile: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfC2G0DZgHsNbml5F0GoWhFS3eElD1aSYQiPNabQ&s';

const headers = ['Image', 'ID', 'Patient', 'Doctor', 'Status'];

const data: TableDataType<TAppointment> = [
  {
    _id: '232323',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
  {
    _id: '2325433',
    profile: sampleProfile,
    appointmentId: 'APT-Id',
    doctor: 'Data',
    patient: 'Ali',
    status: true,
  },
];

const Dashboard = () => {
  return (
    <Box>
      <PaginatedTable<TAppointment>
        data={data}
        searchBarProps={{onSearch: () => {}}}
        columns={['profile', 'appointmentId', 'patient', 'doctor', 'status']}
        headers={headers}
        selectInputProps={{
          data: [
            {label: 'Upcoming', value: 'upcoming'},
            {label: 'Past', value: 'past'},
          ],
          defaultValue: 'upcoming',
        }}
        title='Appointments'
        toolbarButtonProps={{title: 'Add'}}
        cellAttrs={{
          status: {type: 'checkbox', callback: ({_id}) => alert(_id)},
          profile: {type: 'avatar'},
          patient: {
            type: 'custom',
            component: () => {
              return (
                <ButtonGroup>
                  <TableButton size='small' title='Details' sx={{mr: 0.2}} />
                  <TableButton size='small' title='Edit' />
                </ButtonGroup>
              );
            },
          },
        }}
      />
    </Box>
  );
};

export default withDrawer(Dashboard);
