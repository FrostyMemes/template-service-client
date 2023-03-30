import React from 'react';
import {Link} from "react-router-dom";
import classes from "./TemplateList.module.css";


const TemplateItem = ({id, title}) => {
    return (
        <>
            {/*<Link to={`/${id}`}>*/}
                <div className={classes.templateItem}>
                    <div className={classes.templateContent}>
                        {title}
                    </div>
                </div>
            {/*</Link>*/}
        </>
    );
};

export default TemplateItem;