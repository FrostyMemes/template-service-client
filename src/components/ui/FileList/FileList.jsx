import React from 'react';
import classes from "./FileList.module.scss";

const FileList = ({onDragStart, onDragLeave, onDragOver}) => {

    return (
        <div
            className={classes.fileList}
            onDragStart={e => onDragStart(e)}
            onDragLeave={e => onDragLeave(e)}
            onDragOver={e => onDragOver(e)}
        >
            Перетащите DOCX файл для загрузки
        </div>
    );
};

export default FileList;