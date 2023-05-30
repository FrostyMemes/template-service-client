import {createSlice} from "@reduxjs/toolkit";
import {fetchDocuments, deleteDocument} from "./DocumentActions";

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
    },
})

export default documentSlice.reducer