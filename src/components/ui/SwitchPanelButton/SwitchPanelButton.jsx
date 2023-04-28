import React from 'react';
import classes from "./SwitchPanel.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SwitchPanelButton = ({fontAwesomeIcon, onClick}) => {
    return (
        <div onClick={event => onClick()} className={classes.switchPanelButton}>
            <FontAwesomeIcon icon={fontAwesomeIcon} size="xl"/>
        </div>
    );
};

export default SwitchPanelButton;