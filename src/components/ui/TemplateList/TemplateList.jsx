import React from 'react';
import TemplateListItem from "./TemplateListItem";

import classes from "./TemplateList.module.css"

const TemplateList = ({templateList, changeCurrentIdTemplate}) => {

    return (
        <div className={classes.templateList}>
            {templateList.map(template =>
                <TemplateListItem
                    key={template.id}
                    id={template.id}
                    templateTitle={template.title}
                    changeCurrentIdTemplate={changeCurrentIdTemplate}
                />
            )}
        </div>
    );
}

export default TemplateList;