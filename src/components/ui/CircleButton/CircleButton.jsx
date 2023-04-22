import React from 'react';
import {NavLink} from "react-router-dom";
import "./CircleButton.scss";
import "font-awesome/css/font-awesome.min.css"

const CircleButton = ({handlerDeleteTemplateFunction, currentTemplateId}) => {

    const menuId = 'circularMenu'
    const openMenu = () => {
        document
            .getElementById(menuId)
            .classList.toggle('active');
    }

    return (
        <div id={menuId} className="circular-menu">
            <a className="circular-floating-btn" onClick={openMenu}>
                <i className="fa fa-bars"></i>
            </a>
            <menu className="circular-items-wrapper">
                    <NavLink to={"/editor/new"} className="fa fa-plus circular-menu-item"/>

                {currentTemplateId &&
                    <NavLink to={`/editor/${currentTemplateId}`} className="fa fa-pencil circular-menu-item"/>}

                {currentTemplateId &&
                    <a onClick={handlerDeleteTemplateFunction} className="fa fa-trash circular-menu-item"></a>}
            </menu>
        </div>
    );
};

export default CircleButton;