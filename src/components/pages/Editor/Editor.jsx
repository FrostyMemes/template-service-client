import React, {useRef, useState} from 'react';
import {useEffect} from "react";
import useDebounce from "../../hooks/use-debounce";
import {sendMarkdown} from "../../../services/MarkdownService";
import MarkdownArea from "../../ui/MarkdownArea/MarkdownArea";
import Template from "../../ui/Template/Template";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {faCircleCheck} from  "@fortawesome/free-regular-svg-icons";
import classes from "./Editor.module.scss";
import IconButton from "../../ui/IconButton/IconButton";

const Editor = ({templateTitle, templateMarkdown, templateMarkup, actionTemplate}) => {

    const [title, setTitle] = useState("")
    const [markdown, setMarkdown] = useState("")
    const [render, setRender]= useState("")
    const [isTitleEditMode, setTitleEditMode] = useState(false)

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
    }, [debouncedRenderTerm])

    useEffect(() => {
        setTitle(templateTitle)
        setMarkdown(templateMarkdown)
    },[templateTitle, templateMarkdown])

    return (
        <div className={classes.editorPage}>
            <div className={classes.templateTitle}>
                {isTitleEditMode
                    ?
                    <input value={title} onChange={event => setTitle(event.target.value)}/>
                    :
                    <h1>{title}</h1> }
                <div className={classes.templateTitleIconButton}>
                <IconButton fontAwesomeIcon={isTitleEditMode ? faCircleCheck : faPencil}
                            onClick={() => setTitleEditMode(!isTitleEditMode)}/>
                </div>
            </div>
            <div className={classes.controlArea}>
                <input type="button" value="Сохранить" className={classes.controlButton}
                       onClick={() => actionTemplate(
                           {
                               Title: title,
                               Markdown: markdown,
                               Markup: render,
                               UserId: 1
                           }
                       )}/>
            </div>
            <div className={classes.editor}>
                <div className={classes.editorTemplateMarkdown}>
                        <div className={classes.markdownArea}>
                            <MarkdownArea  markdown={markdown} onChange={markdown => setMarkdown(markdown)}/>
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