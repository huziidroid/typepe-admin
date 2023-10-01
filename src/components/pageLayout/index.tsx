import {Box, BoxProps} from '@mui/material';

const PageLayout = ({children, ...rest}: BoxProps) => {
  return (
    <Box p={8} sx={{display: 'flex'}} {...rest}>
      {children}
    </Box>
  );
};

export default PageLayout;
