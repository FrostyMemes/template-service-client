import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import SwitchPanelButton from "../../ui/SwitchPanelButton/SwitchPanelButton";
import DragAndDropFileArea from "../../ui/DragAndDropFileArea/DragAndDropFileArea";
import TemplateList from "../../ui/TemplateList/TemplateList";
import DocumentList from "../../ui/DocumentList/DocumentList";
import Template from "../../ui/Template/Template";
import CircleButton from "../../ui/CircleButton/CircleButton";
import {TextField} from "@mui/material";
import TemplateService from "../../../services/TemplateService";
import {deleteTemplate, fetchTemplates} from "../../../store/reducers/TemplatesActions";
import {deleteDocument, fetchDocuments, saveDocument} from "../../../store/reducers/DocumentActions";
import {faFileWord, faTableList} from "@fortawesome/free-solid-svg-icons";
import ListViewOptions from "./ListViewOptions";
import classes from "./TemplaterPage.module.scss";
import $ from "jquery"
import extractTemplateData from "../../../services/DataExtractorService";


const TemplaterPage = () => {

    const templates = useSelector(state => state.templates.templateList)
    const documents = useSelector(state => state.documents.documentList)

    const dispatch = useDispatch()

    const [currentTemplateId, setCurrentTemplateId] = useState(null)
    const [currentDocumentId, setCurrentDocumentId]= useState(null)
    const [documentName, setDocumentName] = useState("")
    const [markup, setMarkup] = useState(null)
    const [listViewOption, setListViewOption] = useState(ListViewOptions.TemplateListView)
    const [drag, setDrag] = useState(false)

    const templateBlockRef = useRef(null)
    const deleteTemplateHandler = () => {
        if (currentTemplateId){
            dispatch(deleteTemplate(currentTemplateId))
            setCurrentTemplateId(null)
        }
    }

    const deleteDocumentHandler = (idDocument) =>{
        dispatch(deleteDocument(idDocument))
        if (idDocument === currentDocumentId) {
            setCurrentDocumentId(null)
        }
    }

    const sendDocumentHandler = () =>{
        console.log($("#template-data .template-element"))
        extractTemplateData($("#template-data .template-element"))

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
        dispatch(saveDocument(files))
        setDrag(false)
    }

    const changeListView = (listNumber) => {
        switch (listNumber){
            case ListViewOptions.TemplateListView:
                return <TemplateList
                    templateList={templates}
                    changeCurrentIdTemplateHandler={(id) => setCurrentTemplateId(id)}/>
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
                        changeCurrentIdTemplateHandler={setCurrentTemplateId}/>)
                    : (drag
                        ? <DragAndDropFileArea
                            onDragStart={(e) => dragStartHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragOver={(e) => dragStartHandler(e)}
                            onDrop={(e) => onDropHandler(e)}
                        />
                        : <DocumentList
                            documentList={documents}
                            changeCurrentIdDocumentHandler={setCurrentDocumentId}
                            deleteDocumentByIdHandler={deleteDocumentHandler}
                            onDragStart={(e) => dragStartHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragOver={(e) => dragStartHandler(e)}
                        />)
                }
            </div>

            <div className={classes.TemplateArea}>
                <div className={classes.DocumentNameField}>
                    { currentDocumentId &&
                        <TextField className={classes.DocumentName}
                                   id="filled-basic"
                                   label="Название формируемого файла"
                                   variant="filled"
                                   value={documentName}
                                   onChange={(e) => setDocumentName(e.target.value)}/>
                    }
                </div>
                <Template DOMRef={templateBlockRef}
                          markup={markup}
                          sendDocumentHandler={sendDocumentHandler}/>
            </div>
            <CircleButton
                currentTemplateId={currentTemplateId}
                onDeleteTemplate={() => deleteTemplateHandler()}/>
        </div>
    );
};

export default TemplaterPage;