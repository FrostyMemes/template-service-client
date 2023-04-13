import React, {useState} from 'react';
import {useEffect} from "react";
import useDebounce from "../../hooks/use-debounce";
import {sendMarkdown} from "../../../services/MarkdownService";
import MarkdownArea from "../../ui/MarkdownArea/MarkdownArea";
import Template from "../../ui/Template/Template";
import classes from "./Editor.module.scss";

const Editor = ({templateTitle, templateMarkdown, templateMarkup, actionTemplate}) => {


    const [title, setTitle] = useState(templateTitle)
    const [markdown, setMarkdown] = useState(templateMarkdown)
    const [render, setRender]= useState(templateMarkup)

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
                       onClick={() => actionTemplate(
                           {
                               Title: title,
                               Markdown: markdown,
                               Markup: render,
                               UserId: 1
                           }
                       )}
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