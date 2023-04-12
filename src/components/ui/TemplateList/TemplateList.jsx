import React from 'react';
import TemplateItem from "./TemplateItem";
import classes from "./TemplateList.module.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const TemplateList = (props) => {
    const dispatch = useDispatch()

    return (
        <div className={classes.templateList}>
            {props.templateList.map(template =>
                <TemplateItem
                    key={template.id}
                    id={template.id}
                    title={template.title}
                />
            )}
        </div>
    );
}

export default TemplateList;