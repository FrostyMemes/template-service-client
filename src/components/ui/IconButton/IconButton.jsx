import React, {useState} from 'react';
import classes from "./IconButton.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IconButton = ({fontAwesomeIcon, onClick}) => {
    const [iconSize, setIconSize] = useState("lg")
    return (
        <div onMouseEnter={() =>setIconSize("xl")}
             onMouseLeave={() =>setIconSize("lg")}
        onClick={onClick}>
            <FontAwesomeIcon icon={fontAwesomeIcon} size={iconSize}/>
        </div>
    );
};

export default IconButton;