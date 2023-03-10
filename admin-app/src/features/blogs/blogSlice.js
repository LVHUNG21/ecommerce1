import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import blogService from  './blogService'; 
// import getProducts from "../features/product/productService";
export const getBlog=createAsyncThunk('blog/get-blogs',async(thunkAPI)=>{
    try{
        return await blogService.getBlogs();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
const initialState={
    blogs:[],
      isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
};
export const blogSlice=createSlice({
    name:'blogs',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getBlog.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getBlog.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=false;
            state.blogs=action.payload;
        }).addCase(getBlog.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
    },
})
export default blogSlice.reducer;