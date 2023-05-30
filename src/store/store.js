import {configureStore} from "@reduxjs/toolkit";
import templateReducer from "./reducers/TemplatesSlice"
import documentReducer from "./reducers/DocumentSlice"

export default configureStore({
    reducer: {
        templates: templateReducer,
        documents: documentReducer,
    },
})