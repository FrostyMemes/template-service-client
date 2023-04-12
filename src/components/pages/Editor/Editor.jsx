import React from 'react';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import useDebounce from "../../hooks/use-debounce";
import {sendMarkdown} from "../../../services/MarkdownService";
import {fetchTemplates, saveTemplate, deleteTemplate} from "../../../store/reducers/TemplateActions";
import MarkdownArea from "../../ui/MarkdownArea/MarkdownArea";
import Template from "../../ui/Template/Template";
import classes from "./Editor.module.scss";
import * as TemplateService from "../../../services/TemplateService";


const Editor = ({title, markdown, render, setMarkdown, setTitle, setRender, saveTemplate}) => {

   /* const [title, setTitle] = useState('Loh')
    const [mdmarkdown, setMarkdown] = useState('')
    const [render, setRender] = useState('')*/
    const debouncedRenderTerm = useDebounce(markdown, 700);

    const renderTemplate = (markdown) => {
        sendMarkdown(markdown)
            .then(response => setRender(response.data))
            .catch(error => setRender(error.message))
    }

    useEffect(() => {
        if (debouncedRenderTerm) {
            renderTemplate(markdown)
        } else {
            setRender('');
        }
    }, [])

    useEffect(() => {
        if (debouncedRenderTerm) {
            console.log(markdown)
            renderTemplate(markdown)
        } else {
            setRender('');
        }
    }, [debouncedRenderTerm])

    return (
        <div className={classes.editorPage}>
            <div className={classes.templateTitle}>
                <h1>{title}</h1>
            </div>
            <div className={classes.controlArea}>
                <input type="button"
                       value="Сохранить"
                       className={classes.controlButton}
                       onClick={() => saveTemplate()}
                />
            </div>
            <div className={classes.editor}>
                <div className={classes.editorTemplateMarkdown}>
                        <div className={classes.markdownArea}>
                            <MarkdownArea onChange={markdown => setMarkdown(markdown)}/>
                        </div>
                        <div className={classes.renderArea}>
                            <Template markup={render}/>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Editor;