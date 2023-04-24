import React from 'react';
import classes from "./SwitchPanel.module.scss";
import "font-awesome/css/font-awesome.min.css"

const SwitchPanelButton = ({faIconClassStyle}) => {
    return (
        <div className={classes.switchPanelButton}>
            <div className={classes.switchPanelButtonIcon}>
                <div className={faIconClassStyle}>
                </div>
            </div>
        </div>
    );
};

export default SwitchPanelButton;