import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name : 'history',
    initialState :[],
    reducers :{
        addToHistory : (state,action)=>{
            state.push(action.payload);
        }
    }
});
export const {addToHistory} = historySlice.actions
export default historySlice.reducer;