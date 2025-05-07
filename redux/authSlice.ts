import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  userId: string | null;
  fullName: string | null;
  email: string | null;
  token: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userId: null,
  fullName: null,
  email: null,
  token: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: (state) => { state.isLoading = true; state.error = null; },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    logoutSuccess: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { startLoading, loginSuccess, loginFailure, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
