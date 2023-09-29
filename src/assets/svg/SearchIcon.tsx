interface SearchIconProps {
  color?: string;
}

export const SearchIcon = (props: SearchIconProps) => {
  const {color = '#B0B9C4'} = props;
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 22 21' fill='none'>
      <path
        d='M10 17.5C14.4183 17.5 18 13.9183 18 9.5C18 5.08172 14.4183 1.5 10 1.5C5.58172 1.5 2 5.08172 2 9.5C2 13.9183 5.58172 17.5 10 17.5Z'
        stroke={color}
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M19.9999 19.4999L15.6499 15.1499' stroke={color} strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};
