import React from 'react';
import classes from "./DocumentList.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from  "@fortawesome/free-regular-svg-icons";
import DocumentListItem from "./DocumentListItem";

const DocumentList = ({documentList, onDragStart, onDragLeave, onDragOver, changeCurrentIdDocument}) => {

    return (
        <div
            className={classes.documentList}
            onDragStart={e => onDragStart(e)}
            onDragLeave={e => onDragLeave(e)}
            onDragOver={e => onDragOver(e)}
        >
            {documentList.map(document =>
                <DocumentListItem
                    key={document.id}
                    id={document.id}
                    documentName={document.fileName}
                    changeCurrentIdDocument={changeCurrentIdDocument}
                />
            )}
        </div>
    );
};

export default DocumentList;