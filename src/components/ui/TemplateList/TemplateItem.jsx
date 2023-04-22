import React from 'react';
import {Link} from "react-router-dom";
import classes from "./TemplateList.module.css";


const TemplateItem = ({id, title, changeCurrentIdTemplate}) => {
    return (
        <>
            <div className={classes.templateItem}>
                <div className={classes.templateContent}
                onClick={event => changeCurrentIdTemplate(id)}>
                    {title}
                </div>
            </div>
        </>
    );
};

export default TemplateItem;