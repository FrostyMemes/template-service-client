import React from 'react';
import classes from "./MarkdownArea.module.css";

const MarkdownArea = ({onChange}) => {

    return (

        <div className={classes.MarkdownAreaBlock}>
{/*            <textarea placeholder={process.env.REACT_APP_BACKEND_ADDRESS}
                      onChange={(e) => onChange(e.target.value)}>
            </textarea>*/}
      <textarea placeholder="Markdown">
            </textarea>
        </div>

    )
}

export default MarkdownArea