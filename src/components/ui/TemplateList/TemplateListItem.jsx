import React from 'react';
import classes from "./TemplateList.module.css";


const TemplateListItem = ({id, templateTitle, changeCurrentIdTemplateHandler}) => {
    return (
        <div className={classes.templateItem}>
            <div className={classes.templateItemContent}
            onClick={() => changeCurrentIdTemplateHandler(id)}>
                {templateTitle}
            </div>
        </div>
    );
};

export default TemplateListItem;