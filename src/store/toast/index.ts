import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {SnackBarType} from '@/types';

export type ToastState = {snackBarState: SnackBarType | null};

const initialState: ToastState = {
  snackBarState: null,
};

export const toastSlice = createSlice({
  name: 'appToast',
  initialState,
  reducers: {
    setToaster: (state, action: PayloadAction<SnackBarType | null>) => {
      state.snackBarState = action.payload;
    },
    closeToaster: state => {
      state.snackBarState = null;
    },
  },
});

export const {closeToaster, setToaster} = toastSlice.actions;
export const selectToast = (state: {appToast: ToastState}) => state.appToast;

export default toastSlice.reducer;
