import {Description, Group} from '@mui/icons-material';
import {Stack, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

import StatCard from './components/StatCard';
import {PatentIcon, VerifierIcon} from '@/assets';
import {PageLayout, withDrawer} from '@/components';
import {Row} from '@/styles';
import {ROUTES_NAMES} from '@/utils';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Stack spacing={3}>
        <Typography variant='h3'>Dashboard</Typography>

        <Stack spacing={4}>
          <Row>
            <StatCard label='Patent Officials' count={9} icon={<PatentIcon height={30} width={30} />} navigateTo={() => navigate(ROUTES_NAMES.PATENT_OFFICIAL)} />
            <StatCard label='Verifier Officials' count={9} icon={<VerifierIcon height={30} width={30} />} navigateTo={() => navigate(ROUTES_NAMES.VERIFIER_OFFICIAL)} sx={{ml: 4}} />
            <StatCard label='Customers' count={9} icon={<Group fontSize='large' color='primary' />} navigateTo={() => navigate(ROUTES_NAMES.PATENT_OFFICIAL)} sx={{ml: 4}} />
          </Row>

          <Row>
            <StatCard label='Drafting Products' count={9} icon={<Description color='primary' fontSize='large' />} navigateTo={() => navigate(ROUTES_NAMES.PRODUCTS)} />
            <StatCard label='Stamps' count={9} icon={<PatentIcon height={30} width={30} />} navigateTo={() => navigate(ROUTES_NAMES.STAMPS)} sx={{ml: 4}} />
            <StatCard label='Patent Verifier' count={9} icon={<VerifierIcon height={30} width={30} />} navigateTo={() => navigate(ROUTES_NAMES.PATENT_OFFICIAL)} sx={{ml: 4}} />
          </Row>
        </Stack>
      </Stack>
    </PageLayout>
  );
};

export default withDrawer(Dashboard);
