import { createSlice,createAsyncThunk,createAction } from "@reduxjs/toolkit";

import pCategoryService from "./pcategoryService";

export const getCategories=createAsyncThunk('productCategory/get-categories',async(thunkAPI)=>{
    try{
        return await pCategoryService.getProductCategories();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const getACategory=createAsyncThunk('productCategory/get-category',async(id,thunkAPI)=>{
    try{
        return await pCategoryService.getCategory(id);
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
export const deleteACategory=createAsyncThunk('productCategory/delete-category',async(id,thunkAPI)=>{
    try{
        return await pCategoryService.deleteCategory(id);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const updateCategory=createAsyncThunk('productCategory/update-category',
async(categoryData,thunkAPI)=>{
    try {
        return await pCategoryService.updateCategorys(categoryData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})
export const resetState=createAction("Reset_all");
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
        .addCase(getACategory.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getACategory.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.categoryName=action.payload;
        }).addCase(getACategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
        .addCase(updateCategory.pending,(state)=>{
            state.isLoading=true;
        }).addCase(updateCategory.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.updatedCategory=action.payload;
        }).addCase(updateCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(deleteACategory.pending,(state)=>{
            state.isLoading=true;
        }).addCase(deleteACategory.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.deletedCategory=action.payload;
        }).addCase(deleteACategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(resetState,()=>initialState)



    },
})
export default pCategorySlice.reducer;