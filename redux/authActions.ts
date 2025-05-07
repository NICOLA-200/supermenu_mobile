import { Dispatch } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axios } from '../lib/axios.config';
import { startLoading, loginSuccess, loginFailure, logoutSuccess } from './authSlice';

export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const res = await axios.post('/auth/login', { email, password });
    const { userId, username, email: userEmail, token } = res.data;
    await AsyncStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    dispatch(loginSuccess({ userId, username, email: userEmail, token }));
  } catch (err: any) {
    dispatch(loginFailure(err.response?.data?.message || 'Login failed'));
  }
};

export const signup = (email: string, password: string ,username: string  ) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const res = await axios.post('/auth/login', { email, password, username });
    const { userId, email: userEmail, token } = res.data;
    await AsyncStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    dispatch(loginSuccess({ userId, username, email: userEmail, token }));
  } catch (err: any) {
    dispatch(loginFailure(err.response?.data?.message || 'Login failed'));
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  await AsyncStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch(logoutSuccess());
};
