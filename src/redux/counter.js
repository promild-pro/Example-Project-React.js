
import { createAsyncThunk } from "@reduxjs/toolkit";


// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_JSON_PLACEHOLDER
export const ApiJson = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const response = await fetch(`${apiUrl}/users`)
    if(!response.ok){
      throw new Error('network Error')
    }
    return response.json()
  }
)
