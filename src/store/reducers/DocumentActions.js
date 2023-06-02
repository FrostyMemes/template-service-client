import DocumentService from "../../services/DocumentService";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchDocuments = createAsyncThunk(
    'documents/fetchDocuments',
    async (_, thunkAPI) =>{
        try {
            const response = await DocumentService.getAllDocuments()
            return response.data
        } catch (e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const saveDocument = createAsyncThunk(
    'documents/saveDocument',
    async (files, thunkAPI) =>{
        try {
            const response = await DocumentService.saveDocument(files[0])
            return response.data
        } catch (e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const deleteDocument = createAsyncThunk(
    'documents/deleteDocument',
    async (id, thunkAPI) =>{
        try {
            const response = await DocumentService.deleteDocument(id)
            return response.data
        } catch (e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)