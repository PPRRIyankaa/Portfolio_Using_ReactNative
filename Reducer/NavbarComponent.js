import { createSlice } from "@reduxjs/toolkit";

const navbarcomponent = createSlice({
    name:"Heading",
    initialState:{data:0},
    reducers:{
        setcomponent:(state,action)=>{
            state.data = action.payload;
        }
    }
})
export default navbarcomponent.reducer;
export const {setcomponent} = navbarcomponent.actions