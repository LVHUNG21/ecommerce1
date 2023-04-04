import { configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlide';
import customerReducer from '../features/customer/customerSlide';
import brandReducer from '../features/brand/brandSlice';
import productReducer from '../features/product/productSlice';
import pCategoryReducer from '../features/pcategory/pcategorySlice';
import blogReducer from '../features/blogs/blogSlice';
import colorReducer from '../features/color/colorSlice';
import uplooadReducer from '../features/upload/uploadSilde';
import blogCategoryReducer from '../features/bcategory/bcategorySlice';
import CouponReducer from '../features/coupon/couponSlice';
import enquiryReducer from '../features/enq/enqSlice';
export const store=configureStore({
    reducer:{
        auth:authReducer,
        customer:customerReducer,
        product:productReducer,
        brand:brandReducer,
        pCategory:pCategoryReducer,
        blogs:blogReducer,
        color:colorReducer,
        upload:uplooadReducer,
        bCategory:blogCategoryReducer,
        coupon:CouponReducer,        
        enquiry:enquiryReducer,
    }
})