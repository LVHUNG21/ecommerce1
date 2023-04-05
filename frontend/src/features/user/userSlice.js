import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// import thunk from "redux-thunk";
import { userService } from "./userService";
export const resgisterUser = createAsyncThunk(
    'auth/register',
    async (userData,thunkAPI) => {
        try {
            return userService.register(userData);
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
            
        }
    }
  )
  export const loginUser=createAsyncThunk('auth/login',
  
  async (userData,thunkAPI) => {
    try {
        return userService.login(userData);
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
        
    }
  } 
  )
  export const getUserProductWishlist=createAsyncThunk('user/wishlist',async(thunkAPI)=>{
        try {
           return await userService.getUserWishlist() 
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
            
        }


  })
  const getCustomerfromLocalStorage=localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer')): null;
  const initialState={
      user:getCustomerfromLocalStorage,
      isError:false,
      isSuccess:false,
      isLoading:false,
      message:''
  }
export const userSlice=createSlice({
    name:"user"
    ,initialState
    ,reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(resgisterUser.pending,state=>{
            state.isLoading=true;
        }).addCase(resgisterUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdUser=action.payload;
            console.log(state.isSuccess);
            if(state.isSuccess===true){
                toast.info('User Create Successfully')
            }
        }).addCase(resgisterUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
            toast.error(action.error);
            }
        })
        .addCase(loginUser.pending,state=>{
            state.isLoading=true;
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.user=action.payload;
            localStorage.setItem('token',action.payload.token)

            console.log(state.isSuccess);

            if(state.isSuccess===true){
                toast.info('User Login Successfully')
            }
        }).addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
            toast.error(action.error);
            }
        })
         .addCase(getUserProductWishlist.pending,state=>{
            state.isLoading=true;
        }).addCase(getUserProductWishlist.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
        state.wishlist=action.payload;
            localStorage.setItem('token',action.payload.token)

            console.log(state.isSuccess);

            if(state.isSuccess===true){
                toast.info('User Login Successfully')
            }
        }).addCase(getUserProductWishlist.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError===true){
            toast.error(action.error);
            }
        })
    }
    
})
export default userSlice.reducer;