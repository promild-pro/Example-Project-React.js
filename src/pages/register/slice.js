import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const CallStorage = createAsyncThunk(
  'cekData/localStorage',
  async (_, thunkAPI) => {
    try {
      const userData = localStorage.getItem('userState')
      if(userData) {
        const parseData = JSON.parse(userData);
        return parseData
      } else {
        throw new Error('No user data in localStorage.');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({error: error.message})
    }
  }
)
const saveToLocalStorage = (state) => {
  try {
    const serialState = JSON.stringify(state)
    localStorage.setItem('userState', serialState)
  } catch (error) {
    console.error('Error save data :', error);    
  }
}

export const sLiceregister = createSlice({
  name: 'user/beforeLogin',
  initialState: {
    data: []
  },
  reducers: {
    register: (state, action) => {
      state.isLoggedIn = true,
      state.user = action.payload,
      saveToLocalStorage(state)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(CallStorage.fulfilled,(state, action) => {
        state.data = action.payload
      })
  }
})
export const {register} = sLiceregister.actions
export default sLiceregister.reducer