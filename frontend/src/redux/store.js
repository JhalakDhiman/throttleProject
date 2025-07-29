import { configureStore } from '@reduxjs/toolkit'
import {CartSlice} from './slices/CartSlice';
import {ProductSlice} from './slices/ProductSlice';
import { AuthSlice } from './slices/AuthSlice';

export default configureStore({
  reducer: {
    cart:CartSlice.reducer,
    product:ProductSlice.reducer,
    auth:AuthSlice.reducer
  },
})
