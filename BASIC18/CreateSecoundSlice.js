import { createSlice } from "@reduxjs/toolkit";




let Slicetwo=createSlice({
    name:"colorChanger",
    initialState:{
        color:"white"
    },
    reducers:{
        setcolor:(state,action)=>{
            state.color=action.payload
        }
    }
    
})

export let {setcolor}=Slicetwo.actions;
export default Slicetwo.reducer;