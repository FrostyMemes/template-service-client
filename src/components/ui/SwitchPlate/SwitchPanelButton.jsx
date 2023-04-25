import React from 'react';
import classes from "./SwitchPanel.module.scss";
import "font-awesome/css/font-awesome.min.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SwitchPanelButton = ({faIcon}) => {
    return (
        <div className={classes.switchPanelButton}>
            <FontAwesomeIcon icon={faIcon} size="xl"/>
        </div>
    );
};

export default SwitchPanelButton;