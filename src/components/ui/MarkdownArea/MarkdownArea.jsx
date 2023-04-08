import React from 'react';
import classes from "./MarkdownArea.module.css";

const MarkdownArea = ({onChange}) => {

    return (
        <div className={classes.MarkdownAreaBlock}>
          <textarea placeholder="Enter markdown"/>
        </div>
    )
}

export default MarkdownArea