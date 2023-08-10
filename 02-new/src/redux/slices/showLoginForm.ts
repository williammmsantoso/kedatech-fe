import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

interface LoginFormState {
  value: boolean,
}

const initialState: LoginFormState = {
  value: false,
}

export const showLoginForm = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setShowLoginForm: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
});

export const { setShowLoginForm } = showLoginForm.actions;

export const selectShowLoginForm = (state: RootState) => state.showLoginForm.value;

export default showLoginForm.reducer;