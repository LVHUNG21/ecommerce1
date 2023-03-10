import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
// import getProducts from "../features/product/productService";
export const getProduct=createAsyncThunk('product/get-products',async(thunkAPI)=>{
    try{
        return await productService.getProducts();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
const initialState={
    products:[],
      isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
};
export const productSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProduct.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=false;
            state.products=action.payload;
        }).addCase(getProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
    },
})
export default productSlice.reducer;