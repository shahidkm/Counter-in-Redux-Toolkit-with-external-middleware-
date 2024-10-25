import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import Reducer from "./Createslice18" 
import { Middleware18 } from './Middleware18';
import  Reducer2 from "./CreateSecoundSlice"

export let Store18=configureStore({
    reducer:{
        counter:Reducer,
        colorChanger:Reducer2

    },
middleware:(getDefaultMiddleware)=>{
let x=getDefaultMiddleware().concat(Middleware18)
return x;
}
})