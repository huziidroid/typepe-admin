import {Box, Container, Stack, Typography} from '@mui/material';

import {BlankStateIcon} from '@/assets';

interface IBlankStateProps {
  label: string;
  infoText?: string;
}

const BlankState = (props: IBlankStateProps) => {
  const {label, infoText} = props;
  return (
    <Container>
      <Stack spacing={3}>
        <BlankStateIcon />

        <Box>
          <Typography variant='h4' component='h4' align='center'>
            {label}
          </Typography>
          <Typography variant='subtitle1' component='h6' align='center'>
            {infoText}
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default BlankState;
