import { createSlice,createAsyncThunk ,createAction} from "@reduxjs/toolkit";
import couponService from  './couponService'; 
export const getAllcoupons=createAsyncThunk('coupon/get-coupons',async(thunkAPI)=>{
    try{
        return await couponService.getCoupon();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const createcoupons=createAsyncThunk('coupon/create-coupon',
async(couponData,thunkAPI)=>{
    try {
        return await couponService.createCoupon(couponData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})
export const resetState=createAction("Reset_all");
const initialState={
    coupons:[],
      isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
};
export const couponSlice=createSlice({
    name:'coupons',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllcoupons.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAllcoupons.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=false;
            state.coupons=action.payload;
        }).addCase(getAllcoupons.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(createcoupons.pending,(stapte)=>{
            state.isLoading=true;
        }).addCase(createcoupons.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdCoupons=action.payload;
        }).addCase(createcoupons.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(resetState,()=>initialState);

    },
})
export default couponSlice.reducer;