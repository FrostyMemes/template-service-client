import React, {useEffect} from 'react';
import classes from "./TemplaterPage.module.scss";
import TemplateList from "../../ui/TemplateList/TemplateList";
import Template from "../../ui/Template/Template";
import {fetchTemplates} from "../../../store/reducers/TemplateActions";
import {useDispatch, useSelector} from "react-redux";

const TemplaterPage = () => {

    const templates = useSelector(state => state.templates.templates)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTemplates())
    }, [])

    return (
        <div className={classes.TemplaterPage}>
            <TemplateList templateList={templates}/>
            <Template/>
        </div>
    );
};

export default TemplaterPage;