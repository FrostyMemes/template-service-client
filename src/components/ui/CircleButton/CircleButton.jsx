import React from 'react';
import {NavLink} from "react-router-dom";
import "./CircleButton.scss";
import "font-awesome/css/font-awesome.min.css"

const CircleButton = ({onDeleteTemplate, currentTemplateId}) => {

    const menuId = 'circularMenu'
    const openMenu = () => {
        document
            .getElementById(menuId)
            .classList.toggle('active');
    }

    return (
        <div id={menuId} className="circular-menu">
            <a className="circular-floating-btn" onClick={openMenu}>
                <i className="fa fa-bars"/>
            </a>
            <menu className="circular-items-wrapper">
                    <NavLink
                        to={"/editor/new"}
                        className="fa fa-plus circular-menu-item"/>

                {currentTemplateId &&
                    <NavLink
                        to={`/editor/${currentTemplateId}`}
                        className="fa fa-pencil circular-menu-item"/>}

                {currentTemplateId &&
                    <a onClick={() => onDeleteTemplate()} className="fa fa-trash circular-menu-item"/>}
            </menu>
        </div>
    );
};

export default CircleButton;