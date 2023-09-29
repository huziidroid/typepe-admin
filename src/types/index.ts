/* eslint-disable @typescript-eslint/no-explicit-any */
export type TCellVariant = 'checkbox' | 'button' | 'avatar' | 'text' | 'custom';

export type TCellAction<T> = {type?: TCellVariant; callback?: (args: T) => void; component?: (args: T) => React.ReactElement};

export type TableDataType<T> = Array<{[K in keyof T]: T[K]}>;
export type TableColumns<T> = Array<keyof T>;

export type TStandardObject = {
  label: string;
  value: string | number;
};
