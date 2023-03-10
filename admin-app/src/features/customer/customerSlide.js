import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import customerService from "./customerService";

export const getUser=createAsyncThunk('customer/get-customers',async(thunkAPI)=>{
    try{
        return await customerService.getUsers();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
const initialState={
    customers:[],
      isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
};
export const customerSlide=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=false;
            state.customers=action.payload;
        }).addCase(getUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
    },
})
export default customerSlide.reducer;