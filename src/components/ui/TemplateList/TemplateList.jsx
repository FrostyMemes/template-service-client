import React from 'react';
import TemplateItem from "./TemplateItem";
import classes from "./TemplateList.module.css"
import {Link} from "react-router-dom";

const TemplateList = (props) => {
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