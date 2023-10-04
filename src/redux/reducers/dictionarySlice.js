import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchWord = createAsyncThunk('dictionary/searchWord',async (word)=>{
        try{
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            return response.data;
        }
        catch (error){
             throw error;
        }
});
const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState :{
        wordData:null,
        loading:false,
    },
    reducers:{},
    extraReducers : (builder) => {
        builder
         .addCase(searchWord.pending,(state)=>{
            state.loading= true;
         })
         .addCase(searchWord.fulfilled,(state,action)=>{
            state.loading=false;
            state.wordData = action.payload;
         })
         .addCase(searchWord.rejected ,(state)=>{
            state.loading = false;
            state.wordData = null;
         })
    }
})
export default dictionarySlice.reducer;