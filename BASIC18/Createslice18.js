import { createSlice } from "@reduxjs/toolkit";


let CreateSlice18=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        dicrement:(state)=>{
            state.count-=1
        }
    }
})

export let {increment,dicrement}=CreateSlice18.actions;
export default CreateSlice18.reducer;