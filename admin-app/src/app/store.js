import {configure, configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlide';
import customerReducer from '../features/customer/customerSlide';
import brandReducer from '../features/brand/brandSlice';
import productReducer from '../features/product/productSlice';
export const store=configureStore({
    reducer:{auth:authReducer,customer:customerReducer,product:productReducer,brand:brandReducer}
})