import React, {useEffect, useState} from 'react';
import classes from "./TemplaterPage.module.scss";
import SwitchPanelButton from "../../ui/SwitchPanelButton/SwitchPanelButton";
import TemplateList from "../../ui/TemplateList/TemplateList";
import FileList from "../../ui/FileList/FileList";
import Template from "../../ui/Template/Template";
import CircleButton from "../../ui/CircleButton/CircleButton";
import {deleteTemplate, fetchTemplates} from "../../../store/reducers/TemplatesActions";
import {useDispatch, useSelector} from "react-redux";
import {getTemplateById} from "../../../services/TemplateService";
import {faFileWord, faTableList} from "@fortawesome/free-solid-svg-icons";
import ListViewOptions from "./ListViewOptions";
import DragAndDropFileArea from "../../ui/DragAndDropFileArea/DragAndDropFileArea";


const TemplaterPage = () => {

    const templates = useSelector(state => state.templates.templates)
    const dispatch = useDispatch()

    const [currentTemplateId, setCurrentTemplateId] = useState(null)
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
                return <FileList/>
        }
    }

    useEffect(() => {
        dispatch(fetchTemplates())
    }, [])

    useEffect(() => {
        if (currentTemplateId)
            getTemplateById(currentTemplateId)
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
                        : <FileList
                            onDragStart={(e) => dragStartHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragOver={(e) => dragStartHandler(e)}
                        />)
                }
            </div>
            <div className={classes.TemplateArea}>
                <Template markup={markup}/>
            </div>
            <CircleButton
                currentTemplateId={currentTemplateId}
                handlerDeleteTemplateFunction={deleteTemplateHandler}/>
        </div>
    );
};

export default TemplaterPage;