import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SwitchPanelButton from "../../ui/SwitchPanelButton/SwitchPanelButton";
import DragAndDropFileArea from "../../ui/DragAndDropFileArea/DragAndDropFileArea";
import TemplateList from "../../ui/TemplateList/TemplateList";
import DocumentList from "../../ui/DocumentList/DocumentList";
import Template from "../../ui/Template/Template";
import CircleButton from "../../ui/CircleButton/CircleButton";
import TemplateService from "../../../services/TemplateService";
import {deleteTemplate, fetchTemplates} from "../../../store/reducers/TemplatesActions";
import {faFileWord, faTableList} from "@fortawesome/free-solid-svg-icons";
import ListViewOptions from "./ListViewOptions";
import classes from "./TemplaterPage.module.scss";
import DocumentService from "../../../services/DocumentService";
import {fetchDocuments} from "../../../store/reducers/DocumentActions";
import {TextField} from "@mui/material";


const TemplaterPage = () => {

    const templates = useSelector(state => state.templates.templateList)
    const documents = useSelector(state => state.documents.documentList)

    const dispatch = useDispatch()

    const [currentTemplateId, setCurrentTemplateId] = useState(null)
    const [currentDocumentId, setCurrentDocumentId]= useState(null)
    const [markup, setMarkup] = useState(null)
    const [listViewOption, setListViewOption] = useState(ListViewOptions.TemplateListView)
    const [drag, setDrag] = useState(false)

    const deleteTemplateHandler = () => {
        if (currentTemplateId){
            dispatch(deleteTemplate(currentTemplateId))
            setCurrentTemplateId(null)
        }
    }

    const dragStartHandler = (e) => {
        e.preventDefault()
        setDrag(true)
    }

    const dragLeaveHandler = (e) => {
        e.preventDefault()
        setDrag(false)
    }

    const onDropHandler = (e) => {
        e.preventDefault()
        const files = [...e.dataTransfer.files]
        DocumentService.saveFile(files[0])
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        console.log(files)
        setDrag(false)
    }

    const changeListView = (listNumber) => {
        switch (listNumber){
            case ListViewOptions.TemplateListView:
                return <TemplateList
                    templateList={templates}
                    changeCurrentIdTemplate={setCurrentTemplateId}/>
            case ListViewOptions.FileListView:
                return <DocumentList/>
        }
    }

    useEffect(() => {
        dispatch(fetchTemplates())
        dispatch(fetchDocuments())
    }, [])

    useEffect(() => {
        if (currentTemplateId)
            TemplateService.getTemplateById(currentTemplateId)
                .then(response => {
                    setMarkup(response.data.markup)
                })
                .catch(error => setMarkup(error))
    },[currentTemplateId])

    return (
        <div className={classes.templaterPage}>
            <div className={classes.ListArea}>
                <div className={classes.switchPanel}>
                   <SwitchPanelButton
                        fontAwesomeIcon={faTableList}
                        onClick={() => setListViewOption(ListViewOptions.TemplateListView)}/>
                    <SwitchPanelButton
                        fontAwesomeIcon={faFileWord}
                        onClick={() => setListViewOption(ListViewOptions.FileListView)}/>
                </div>
                {listViewOption === ListViewOptions.TemplateListView
                    ? (<TemplateList
                        templateList={templates}
                        changeCurrentIdTemplate={setCurrentTemplateId}/>)
                    : (drag
                        ? <DragAndDropFileArea
                            onDragStart={(e) => dragStartHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragOver={(e) => dragStartHandler(e)}
                            onDrop={(e) => onDropHandler(e)}
                        />
                        : <DocumentList
                            documentList={documents}
                            changeCurrentIdDocument={setCurrentDocumentId}
                            onDragStart={(e) => dragStartHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragOver={(e) => dragStartHandler(e)}
                        />)
                }
            </div>

            <div className={classes.TemplateArea}>
                <div className={classes.DocumentNameField}>
                    <TextField className={classes.DocumentName} id="filled-basic" label="Название формируемого файла" variant="filled" />
                </div>
                <Template markup={markup}/>
            </div>
            <CircleButton
                currentTemplateId={currentTemplateId}
                handlerDeleteTemplateFunction={deleteTemplateHandler}/>
        </div>
    );
};

export default TemplaterPage;