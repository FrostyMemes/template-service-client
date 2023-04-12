import React, {useState} from 'react';
import Editor from  './Editor'
import * as TemplateService from "../../../services/TemplateService";

const EditorNewPage = () => {

    const [title, setTitle] = useState('New template')
    const [markdown, setMarkdown] = useState('')
    const [render, setRender] = useState('')

    const handlerSaveTemplate = () =>
    {
        TemplateService.saveTemplate(
            {
                Title: title,
                Markdown: markdown,
                Markup: render,
                UserId: 1
            }
        ).then(response => console.log(response))
            .catch(error => setRender(error.message))
    }

    return (
        <div>
            <Editor
                title={title}
                markdown={markdown}
                render = {render}
                setMarkdown={setMarkdown}
                setTitle={setTitle}
                setRender={setRender}
                saveTemplate={handlerSaveTemplate}
            />
        </div>
    );
};

export default EditorNewPage;