import {TStandardObject} from '@/types';
import {Divider, Grid, Typography} from '@mui/material';
import {Stack} from '@mui/system';

interface IInfoItemProps {
  item: TStandardObject;
}
const InfoItem = (props: IInfoItemProps) => {
  const {item} = props;

  return (
    <Stack spacing={2}>
      <Grid container direction='row'>
        <Grid item xs>
          <Typography variant='subtitle2' textAlign='left' fontWeight={600} width='100%'>
            {item.label}
          </Typography>
        </Grid>

        <Grid item xs>
          <Typography variant='subtitle2' textAlign='left' width='100%'>
            {item.value || '-'}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </Stack>
  );
};

export default InfoItem;
