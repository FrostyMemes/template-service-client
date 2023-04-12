import React, {useEffect, useState} from 'react';
import classes from "./TemplaterPage.module.scss";
import TemplateList from "../../ui/TemplateList/TemplateList";
import Template from "../../ui/Template/Template";
import {fetchTemplates} from "../../../store/reducers/TemplateActions";
import {useDispatch, useSelector} from "react-redux";
import CircleButton from "../../ui/CircleButton/CircleButton";

const TemplaterPage = () => {

    const templates = useSelector(state => state.templates.templates)
    const dispatch = useDispatch()

    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(fetchTemplates())
    }, [])

    return (
        <div className={classes.TemplaterPage}>
            <div className={classes.TemplateListArea}>
                <TemplateList templateList={templates}/>
            </div>
            <div className={classes.TemplateArea}>
                <Template/>
            </div>
            <CircleButton/>
        </div>
    );
};

export default TemplaterPage;