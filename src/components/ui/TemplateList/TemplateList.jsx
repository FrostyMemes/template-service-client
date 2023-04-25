import React from 'react';
import TemplateItem from "./TemplateItem";
import SwitchPanel from "../SwitchPlate/SwitchPanel";
import classes from "./TemplateList.module.css"

const TemplateList = ({templateList, changeCurrentIdTemplate}) => {

    return (
        <div className={classes.templateList}>
            <SwitchPanel/>
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