import React from 'react';
import classes from "../DocumentList/DocumentList.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";

const DocumentListItem = ({id, documentName, changeCurrentIdDocument}) => {
    return (
        <div className={classes.documentItem}>
            <div className={classes.documentItemContent}
                 onClick={() => changeCurrentIdDocument(id)}>
                <div className={classes.documentName}>
                    {documentName}
                </div>
                <div className={classes.deleteIcon}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            </div>
        </div>
    );
};

export default DocumentListItem;