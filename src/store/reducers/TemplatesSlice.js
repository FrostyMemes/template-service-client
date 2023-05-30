import {createSlice} from "@reduxjs/toolkit";
import {
    fetchTemplates,
    deleteTemplate,
    saveTemplate,
    updateTemplate
} from "./TemplatesActions";

const templatesSlice = createSlice({
    name: 'templates',
    initialState:{
        templateList:[],
        error: null
    },

    reducers:{

    },

    extraReducers:{
        [fetchTemplates.pending]: (state, action) => {
            state.status = true
        },
        [fetchTemplates.fulfilled]: (state, action) => {
            state.templateList = action.payload
            state.status = false
        },
        [fetchTemplates.rejected]: (state, action) => {
            state.status = false
            state.error = action.payload
        },

        [saveTemplate.pending]:(state, action) => {

        },
        [saveTemplate.fulfilled]:(state, action) => {
            state.templateList.push(action.payload)
        },
        [saveTemplate.rejected]:(state, action) => {
            state.error = action.payload
        },

        [updateTemplate.pending]:(state, action) => {

        },
        [updateTemplate.fulfilled]:(state, action) => {
            state.templateList.map(template => {
                return (template.id == action.payload.id)
                    ? template.title = action.payload.title
                    : template
            })
        },
        [updateTemplate.rejected]:(state, action) => {
            state.error = action.payload
        },

        [deleteTemplate.pending]:(state, action) => {

        },
        [deleteTemplate.fulfilled]:(state, action) => {
            console.log(action.payload)
            state.templateList = state.templateList.filter(template => template.id !== action.payload.id)
        },
        [deleteTemplate.rejected]:(state, action) => {
            state.error = action.payload
        },
    },
})

export default templatesSlice.reducer;