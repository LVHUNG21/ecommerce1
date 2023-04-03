import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const getUserfromLocalStorage=localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')): null;


const userDefaultState={
    _id:null,
    firstname:null,
    lastname:null,
    email:null,
    mobile:null,
    token:null,
}

const initialState={
    user:getUserfromLocalStorage,
    orders:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
};

export const login=createAsyncThunk('auth/admin-login',async(user,thunkAPI)=>{
    try{
        return await authService.login(user);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const getOrders=createAsyncThunk('order/get-orders',async(thunkAPI)=>{
    try{
        return await authService.getOrders();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const getOrder=createAsyncThunk('order/get-order',async(id,thunkAPI)=>{
    try{
        return await authService.getOrder(id);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const authSlide=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(login.pending,state=>{
            state.isLoading=true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.user=action.payload;
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.user=null;
        })
    .addCase(getOrder.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getOrder.fulfilled,(state,action)=>{
            state.isError=false;
            state.isLoading=false;
            state.isSuccess=true;
            state.orderbyuser=action.payload;
        })
        .addCase(getOrder.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            // state.user=null;
            state.isLoading=false;
    })
    
    },
})
export default authSlide.reducer;