import {createSlice} from "@reduxjs/toolkit";
import {fetchDocuments, deleteDocument, saveDocument} from "./DocumentActions";

const documentSlice = createSlice({
    name: 'documents',
    initialState:{
      documentList:[],
      error: null,
    },

    reducers:{

    },

    extraReducers:{
        [fetchDocuments.pending]: (state, action) => {
            state.status = true
        },
        [fetchDocuments.fulfilled]: (state, action) => {
            state.documentList = action.payload
            state.status = false
        },
        [fetchDocuments.rejected]: (state, action) => {
            state.status = false
            state.error = action.payload
        },

        [saveDocument.pending]: (state, action) =>{
        },
        [saveDocument.fulfilled]: (state, action) => {
            state.documentList.push(action.payload)
        },
        [saveDocument.rejected]: (state, action) => {
            state.error = action.payload
        },

        [deleteDocument.pending]: (state, action) =>{

        },
        [deleteDocument.fulfilled]: (state, action) => {
            state.documentList = state.documentList.filter(document => document.id !== action.payload.id)
        },
        [deleteDocument.rejected]: (state, action) => {
            state.error = action.payload
        },
    },
})

export default documentSlice.reducer