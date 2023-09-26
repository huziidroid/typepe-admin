import {StyledErrorText} from './styles';

type ErrorTextPropType = {
  message?: string;
};

const ErrorText = (props: ErrorTextPropType) => {
  const {message} = props;
  return <StyledErrorText variant='body2'>{message}</StyledErrorText>;
};

export default ErrorText;
