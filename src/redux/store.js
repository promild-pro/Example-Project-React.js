import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slice'
// import ReducerSlice from './sliceUser'
import Login from '../pages/login/slice'
import Regiter from '../pages/register/slice'


const store = configureStore({
  reducer: {
    user: userReducer,
    login: Login,
    register: Regiter, 
  },
})

export default store
