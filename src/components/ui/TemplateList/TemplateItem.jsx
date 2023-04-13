import React from 'react';
import {Link} from "react-router-dom";
import classes from "./TemplateList.module.css";


const TemplateItem = ({id, title}) => {
    return (
        <>
            <div className={classes.templateItem}>
                <div className={classes.templateContent}>
                    {title}
                </div>
            </div>
        </>
    );
};

export default TemplateItem;