import { createSlice } from "@reduxjs/toolkit";

const SetIndex=createSlice({
    name:"index",
    initialState:0,
    reducers:{
        setindex:(state,action)=>{
         return action.payload
        }
    }
})
export default SetIndex.reducer;
export const{setindex}=SetIndex.actions;