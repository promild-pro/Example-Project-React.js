import {  createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setUserToken } from "../../storage";


const loadLocalStorage = () => {
  try{
    const state = localStorage.getItem('userState')
    return state ? JSON.parse(state) : undefined;
  } catch (error){
    console.error('Error load data: ', error);
  }
}
const saveToLocalStorage = (state) => {
  try {
    const serialState = JSON.stringify(state)
    localStorage.setItem('userState', serialState)
  } catch (error) {
    console.error('Error save data :', error);    
  }
}

export const LoadStorage = createAsyncThunk(
  'data/localStorage',
  async (_, thunkAPI) => {
    try {
      const userData = localStorage.getItem('users');

      if (userData) {
        const parsedData = JSON.parse(userData);
        return parsedData;
      } else {
        throw new Error('No user data in localStorage.');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
)
const initialState = loadLocalStorage() || {
  isLoggedIn: false,
  user: null,
  data: []
}

export const sLiceBeforeLogin = createSlice({
  name: 'user/beforeLogin',
  initialState,
  reducers: {
    login: (state, action) => {
      setUserToken()
      state.isLoggedIn = true,
      state.user = action.payload,
      saveToLocalStorage(state)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoadStorage.fulfilled,(state, action) => {
        state.data = action.payload
      })
  }
})
export const {login} = sLiceBeforeLogin.actions
export default sLiceBeforeLogin.reducer