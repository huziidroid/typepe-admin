import {Stack, StackProps} from '@mui/material';

const PageLayout = ({children, ...rest}: StackProps) => {
  return (
    <Stack p={7} {...rest}>
      {children}
    </Stack>
  );
};

export default PageLayout;
