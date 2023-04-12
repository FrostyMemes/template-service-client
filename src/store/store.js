import {configureStore} from "@reduxjs/toolkit";
import templateReducer from "./reducers/TemplateSlice"
import editorReducer from "./reducers/EditorSlice";

export default configureStore({
    reducer: {
        templates: templateReducer,
    },
})