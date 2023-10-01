import {CircularProgress, Modal} from '@mui/material';

import {ImageContainer} from './styles';

interface IAppLoaderProps {
  isLoading: boolean;
}

const AppLoader = ({isLoading}: IAppLoaderProps) => {
  return (
    <Modal open={isLoading}>
      <ImageContainer>
        <CircularProgress />
      </ImageContainer>
    </Modal>
  );
};

export default AppLoader;
