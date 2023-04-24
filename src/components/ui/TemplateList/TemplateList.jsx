import React from 'react';
import TemplateItem from "./TemplateItem";
import classes from "./TemplateList.module.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SwitchPanelButton from "../SwitchPlate/SwitchPanelButton";

const TemplateList = ({templateList, changeCurrentIdTemplate}) => {
    const dispatch = useDispatch()

    return (
        <div className={classes.templateList}>
            <SwitchPanelButton faIconClassStyle="fa fa-file-word-o "/>
            <SwitchPanelButton faIconClassStyle="fa fa-file-word-o "/>
            {templateList.map(template =>
                <TemplateItem
                    key={template.id}
                    id={template.id}
                    title={template.title}
                    changeCurrentIdTemplate={changeCurrentIdTemplate}
                />
            )}
        </div>
    );
}

export default TemplateList;