import React, {useEffect, useState} from 'react';
import Editor from  './Editor'
import {useParams} from "react-router-dom";
import {getTemplateById} from "../../../services/TemplateService";

const EditorUpdatePage = () => {

    const {idTemplate} = useParams()
    const [template, setTemplate] = useState({
        Id: "",
        Title: "",
        Markdown:"",
        Markup:"",
    })

    const handlerUpdateTemplate = (data) => {

    }

    useEffect(() => {
        getTemplateById(idTemplate)
            .then(response => setTemplate(response.data))
            .catch(error => console.log(error))
    }, [idTemplate])


    return (
        <div>
            <Editor
                templateTitle={template.Title}
                templateMarkdown={template.Markdown}
                templateMarkup={template.Markup}
                actionTemplate={handlerUpdateTemplate}
            />
        </div>
    );
};

export default EditorUpdatePage;