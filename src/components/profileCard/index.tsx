import {Avatar, Paper} from '@mui/material';
import {Stack, SxProps} from '@mui/system';

import {TStandardObject} from '@/types';
import InfoItem from './components/InfoItem';
import {FullWidthContainer} from '@/styles';

interface IProfileCardProps {
  profileImage?: string;
  sx?: SxProps;
  cardInfo: TStandardObject[];
}

const ProfileCard = (props: IProfileCardProps) => {
  const {cardInfo, profileImage, sx} = props;

  return (
    <Paper sx={{padding: '20px', minHeight: 600, ...sx}}>
      <Stack alignItems='center' spacing={4}>
        <Avatar src={profileImage} alt='profile-image' sx={{height: 170, width: 170}} />

        <FullWidthContainer spacing={2}>
          {cardInfo.map((item, index) => {
            return <InfoItem item={item} key={item.label + index.toString()} />;
          })}
        </FullWidthContainer>
      </Stack>
    </Paper>
  );
};

export default ProfileCard;
