// pagination table Types
export type TCellVariant = 'checkbox' | 'button' | 'avatar' | 'text' | 'custom';

export type TCellAction<T> = {type?: TCellVariant; callback?: (args: T) => void; component?: (args: T) => React.ReactElement};

export type TableDataType<T> = Array<{[K in keyof T]: T[K]}>;
export type TableColumns<T> = Array<keyof T>;

// Drawer types

export type TDrawerItem = {
  label: string;
  icon: React.ReactNode;
  focusedIcon: React.ReactNode;
  route: string;
};

// generics
export type TStandardObject = {
  label: string;
  value: string | number;
};

export type TSvgIconProps = {
  height?: string | number;
  width?: string | number;
  color?: string;
};
