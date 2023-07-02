import React from 'react';
import classes from "./DocumentList.module.scss";
import DocumentListItem from "./DocumentListItem";

const DocumentList = ({documentList, onDragStart, onDragLeave, onDragOver, changeCurrentIdDocumentHandler, deleteDocumentByIdHandler}) => {

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
                    changeCurrentIdDocumentHandler={changeCurrentIdDocumentHandler}
                    deleteDocumentByIdHandler={deleteDocumentByIdHandler}
                />
            )}
        </div>
    );
};

export default DocumentList;