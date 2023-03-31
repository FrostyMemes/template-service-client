import React from 'react';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import useDebounce from "../../hooks/use-debounce";
import {sendMarkdown} from "../../../services/MarkdownService";
import {fetchTemplates, saveTemplate, deleteTemplate} from "../../../store/reducers/TemplateActions";
import MarkdownArea from "../../ui/MarkdownArea/MarkdownArea";
import Template from "../../ui/Template/Template";
import classes from "./EditorPage.module.scss";


const EditorPage = () => {

    // const templates = useSelector(state => state.templates.templates)
    // const dispatch = useDispatch()

    const [mdMarkdown, setMarkdown] = useState('mTest')
    const [mdRender, setRender] = useState('rTest')
    const [title, setTitle] = useState('Test')

    const debouncedRenderTerm = useDebounce(mdMarkdown, 700);

    const renderTemplate = (markdown) => {
        sendMarkdown(markdown)
            .then(response => setRender(response.data))
            .catch(error => setRender(error.message))
    }

/*    useEffect(() => {
        if (debouncedSearchTerm) {
            renderTemplate(mdMarkdown)
        } else {
            setRender('');
        }
    }, [])*/

    useEffect(() => {
        if (debouncedRenderTerm) {
            renderTemplate(mdMarkdown)
        } else {
            setRender('');
        }
    }, [debouncedRenderTerm])

    return (
        <div className={classes.editor}>
            <div className={classes.editorArea}>
                <div className={classes.markdownArea}>
                    <MarkdownArea onChange={markdown => setMarkdown(markdown)}/>
                </div>
                <div className={classes.renderArea}>
                    <Template markup={mdRender}/>
                </div>
            </div>
        </div>
    );
};

export default EditorPage;