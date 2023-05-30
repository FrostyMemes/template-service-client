import React from 'react';
import classes from "./TemplateList.module.css";


const TemplateListItem = ({id, templateTitle, changeCurrentIdTemplate}) => {
    return (
        <div className={classes.templateItem}>
            <div className={classes.templateItemContent}
            onClick={() => changeCurrentIdTemplate(id)}>
                {templateTitle}
            </div>
        </div>
    );
};

export default TemplateListItem;