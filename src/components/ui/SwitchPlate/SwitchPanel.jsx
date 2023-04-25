import React from 'react';
import classes from "./SwitchPanel.module.scss";
import SwitchPanelButton from "./SwitchPanelButton";
import {faFileWord, faTableList} from "@fortawesome/free-solid-svg-icons";

const SwitchPanel = () => {
    return (
        <div className={classes.switchPanel}>
            <SwitchPanelButton faIcon={faTableList}/>
            <SwitchPanelButton faIcon={faFileWord}/>
        </div>
    );
};

export default SwitchPanel;