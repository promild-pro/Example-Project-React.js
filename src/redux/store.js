import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slice'
// import ReducerSlice from './sliceUser'
import Login from '../pages/login/slice'
import Regiter from '../pages/register/slice'
export default configureStore({
  reducer: {
    user: userReducer,
    // userProfile: ReducerSlice,
    login: Login,
    register: Regiter,
  }
})

