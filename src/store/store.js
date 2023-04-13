import {configureStore} from "@reduxjs/toolkit";
import templateReducer from "./reducers/TemplatesSlice"

export default configureStore({
    reducer: {
        templates: templateReducer,
    },
})