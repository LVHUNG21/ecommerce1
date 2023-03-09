import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

export const getUser=createAsyncThunk('product/get-products',async(thunkAPI)=>{
    try{
        return await productService.getUsers();
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
export const productSlide=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=false;
            state.products=action.payload;
        }).addCase(getProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=acion.error;
        })
    },
})
export default productSlide.reducer;