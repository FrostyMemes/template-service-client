import React, {useState} from 'react';
import Editor from  './Editor'
import {saveTemplate} from "../../../store/reducers/TemplatesActions";
import {useDispatch} from "react-redux";

const EditorNewPage = () => {
    const dispatch = useDispatch()
    const saveTemplateHandler = (data) => {
        dispatch(saveTemplate(data))
    }

    return (
        <div>
            <Editor
                templateTitle="New template"
                templateMarkdown=""
                templateMarkup=""
                actionTemplate={saveTemplateHandler}
            />
        </div>
    );
};

export default EditorNewPage;