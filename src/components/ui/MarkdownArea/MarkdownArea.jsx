import React from 'react';
import classes from "./MarkdownArea.module.css";

const MarkdownArea = ({markdown, onChange}) => {

    return (
        <div className={classes.MarkdownAreaBlock}>
            <textarea
                placeholder="Enter markdown"
                value={markdown}
                onChange={e => onChange(e.target.value)}/>
        </div>
    )
}

export default MarkdownArea