import {InputAdornment} from '@mui/material';

export interface CustomInputAdornmentProps {
  position: 'start' | 'end';
  component: string | React.ReactNode;
}

const CustomInputAdornment = ({position, component}: CustomInputAdornmentProps) => {
  return <InputAdornment position={position}>{component}</InputAdornment>;
};

export default CustomInputAdornment;
