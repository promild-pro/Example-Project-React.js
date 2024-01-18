import { createAsyncThunk } from "@reduxjs/toolkit";

export const ApiJson = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if(!response.ok){
      throw new Error('network Error')
    }
    return response.json()
  }
)
