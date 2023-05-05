import React from 'react';
import classes from "./DragAndDropFileArea.module.scss";

const DragAndDropFileArea = ({onDragStart, onDragLeave, onDragOver, onDrop}) => {
    return (
        <div
            className={classes.DragAndDropFileArea}
            onDragStart={e => onDragStart(e)}
            onDragLeave={e => onDragLeave(e)}
            onDragOver={e => onDragOver(e)}
            onDrop={e => onDrop(e)}
        >
        <div>Отпустите файлы, чтобы загрузить их</div>
        </div>
    );
};

export default DragAndDropFileArea;