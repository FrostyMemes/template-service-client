import React from 'react';
import TemplateItem from "./TemplateItem";
import classes from "./TemplateList.module.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const TemplateList = ({templateList, changeCurrentIdTemplate}) => {
    const dispatch = useDispatch()

    return (
        <div className={classes.templateList}>
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