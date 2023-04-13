import React, {useState} from 'react';
import Editor from  './Editor'
import {saveTemplate} from "../../../store/reducers/TemplatesActions";
import {useDispatch} from "react-redux";

const EditorNewPage = () => {
    const dispatch = useDispatch()
    const handlerSaveTemplate = (data) =>
    {
        dispatch(saveTemplate(data))
    }

    return (
        <div>
            <Editor
                templateTitle="New template"
                templateMarkdown=""
                templateMarkup=""
                actionTemplate={handlerSaveTemplate}
            />
        </div>
    );
};

export default EditorNewPage;