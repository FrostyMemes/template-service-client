import React, {useEffect, useState} from 'react';
import classes from "./TemplaterPage.module.scss";
import TemplateList from "../../ui/TemplateList/TemplateList";
import Template from "../../ui/Template/Template";
import {deleteTemplate, fetchTemplates} from "../../../store/reducers/TemplatesActions";
import {useDispatch, useSelector} from "react-redux";
import CircleButton from "../../ui/CircleButton/CircleButton";
import {getTemplateById} from "../../../services/TemplateService";

const TemplaterPage = () => {

    const templates = useSelector(state => state.templates.templates)
    const dispatch = useDispatch()

    const [currentTemplateId, setCurrentTemplateId] = useState(null)
    const [markup, setMarkup] = useState(null)

    const handlerDeleteTemplate = () => {
        if (currentTemplateId){
            dispatch(deleteTemplate(currentTemplateId))
            setCurrentTemplateId(null)
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
        <div className={classes.TemplaterPage}>
            <div className={classes.TemplateListArea}>
                <TemplateList
                    templateList={templates}
                    changeCurrentIdTemplate={setCurrentTemplateId}
                />
            </div>
            <div className={classes.TemplateArea}>
                <Template markup={markup}/>
            </div>
            <CircleButton
                currentTemplateId={currentTemplateId}
                handlerDeleteTemplateFunction={handlerDeleteTemplate}
            />
        </div>
    );
};

export default TemplaterPage;