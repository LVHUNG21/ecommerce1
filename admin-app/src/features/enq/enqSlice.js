import { createSlice,createAsyncThunk ,createAction} from "@reduxjs/toolkit";
import enquiryService from  './enqService'; 
export const getEnqs=createAsyncThunk('enquiry/get-enquirys',async(thunkAPI)=>{
    try{
        return await enquiryService.getEnqs();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const getAEnq=createAsyncThunk('enquiry/get-enquiry',async(id,thunkAPI)=>{
    try{
        return await enquiryService.getEnq(id);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const deleteAEnq=createAsyncThunk('enquiry/delete-enquiry',async(id,thunkAPI)=>{
    try{
        return await enquiryService.deleteEnq(id);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});
export const updateEnq=createAsyncThunk('enquiry/update-enquiry',
async(enquiryData,thunkAPI)=>{
    try {
        return await enquiryService.updateEnqs(enquiryData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})
export const createEnqs=createAsyncThunk('enquiry/create-enquiry',
async(enquiryData,thunkAPI)=>{
    try {
        return await enquiryService.createEnqs(enquiryData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetState=createAction("Reset_all");
const initialState={
    enquirys:[],
      isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
};
export const enquirySlice=createSlice({
    name:'enquirys',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getEnqs.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getEnqs.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=false;
            state.enquirys=action.payload;
        }).addCase(getEnqs.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(createEnqs.pending,(state)=>{
            state.isLoading=true;
        }).addCase(createEnqs.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdEnqs=action.payload;
        }).addCase(createEnqs.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(getAEnq.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAEnq.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.enquiryName=action.payload.name;
            state.enquiryMobile=action.payload.mobile;
            state.enquiryEmail=action.payload.email;
            state.enquiryComment=action.payload.comment;
            state.enquiryStatus=action.payload.status;
        }).addCase(getAEnq.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
       .addCase(updateEnq.pending,(state)=>{
            state.isLoading=true;
        }).addCase(updateEnq.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.updatedEnq=action.payload.title;
        }).addCase(updateEnq.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
        .addCase(deleteAEnq.pending,(state)=>{
            state.isLoading=true;
        }).addCase(deleteAEnq.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.deletedEnq=action.payload;
        }).addCase(deleteAEnq.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
        .addCase(resetState,()=>initialState)

    },
})
export default enquirySlice.reducer;