
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import bcategoryService from  './bcategoryService'; 
// import getProducts from "../features/product/productService";
export const getBlogCategory=createAsyncThunk('blogCategory/get-categories',async(thunkAPI)=>{
    try{
        return await bcategoryService.getBlogCategory();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const newBlogCategory=createAsyncThunk('blogCategory/create-category',
async(blogCategoryData,thunkAPI)=>{
    try {
        return await bcategoryService.createBlogCategory(blogCategoryData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})
const initialState={
    bCategories:[],
      isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
};
export const bCategorySlice=createSlice({
    name:'bCategories',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getBlogCategory.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getBlogCategory.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.bCategories=action.payload;
        }).addCase(getBlogCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(newBlogCategory.pending,(state)=>{
            state.isLoading=true;
        }).addCase(newBlogCategory.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdBlogCategory=action.payload;
        }).addCase(newBlogCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })

    },
})
export default bCategorySlice.reducer;