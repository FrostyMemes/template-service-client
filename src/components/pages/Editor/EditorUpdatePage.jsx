import React, {useEffect, useState} from 'react';
import Editor from  './Editor'
import {useParams} from "react-router-dom";
import {getTemplateById} from "../../../services/TemplateService";
import {useDispatch} from "react-redux";
import {updateTemplate} from "../../../store/reducers/TemplatesActions";

const EditorUpdatePage = () => {

    const {id} = useParams()
    const [title, seTitle] = useState("")
    const [markdown, setMarkdown] = useState("")
    const [markup, setMarkup] = useState("")

    const dispatch = useDispatch()
    const handlerUpdateTemplate = (data) => {

        dispatch(updateTemplate(
            {
                id,
                ...data
            }))
    }

    useEffect(() => {
        getTemplateById(id)
            .then(response => {
                seTitle(response.data.title)
                setMarkdown(response.data.markdown)
                setMarkup(response.data.markup)
            })
            .catch(error => setMarkdown(error))
    }, [id])


    return (
        <div>
            <Editor
                templateTitle={title}
                templateMarkdown={markdown}
                templateMarkup={markup}
                actionTemplate={handlerUpdateTemplate}
            />
        </div>
    );
};

export default EditorUpdatePage;