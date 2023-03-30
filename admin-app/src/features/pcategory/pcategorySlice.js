import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import pCategoryService from "./pcategoryService";

export const getCategories=createAsyncThunk('productCategory/get-categories',async(thunkAPI)=>{
    try{
        return await pCategoryService.getProductCategories();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const createCategorys=createAsyncThunk('productCategory/create-category',
async(categoryData,thunkAPI)=>{
    try {
        return await pCategoryService.createCategorys(categoryData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})
const initialState={
    pCategories:[],
      isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
};
export const pCategorySlice=createSlice({
    name:'pCategories',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getCategories.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=false;
            state.pCategories=action.payload;
        }).addCase(getCategories.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(createCategorys.pending,(state)=>{
            state.isLoading=true;
        }).addCase(createCategorys.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdCategorys=action.payload;
        }).addCase(createCategorys.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })

    },
})
export default pCategorySlice.reducer;