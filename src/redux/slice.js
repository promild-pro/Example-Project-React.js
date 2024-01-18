import {createSlice} from '@reduxjs/toolkit'
import { ApiJson } from "./counter";


const userSlice =  createSlice({
  name: 'user',
  initialState: {
    data: [],
  },
  reducers:{},
  extraReducers: (builder) => {
    builder 
      .addCase(ApiJson.fulfilled,(state, action) => {
        state.data = action.payload
      })
  }
})

export default userSlice.reducer