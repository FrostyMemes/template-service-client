import React from 'react';
import {NavLink} from "react-router-dom";
import "./CircleButton.scss";
import "font-awesome/css/font-awesome.min.css"

const CircleButton = () => {

    const openMenu = () => {
        document
            .getElementById('circularMenu')
            .classList.toggle('active');
    }

    return (
        <div id="circularMenu" className="circular-menu">
            <a className="circular-floating-btn" onClick={openMenu}>
                <i className="fa fa-bars"></i>
            </a>
            <menu className="circular-items-wrapper">
                <NavLink to={"/editor/new"} className="fa fa-plus circular-menu-item"></NavLink>
                <NavLink to={"/editor/:id"} className="fa fa-pencil circular-menu-item"></NavLink>
                <a href="#" className="fa fa-trash circular-menu-item"></a>
            </menu>
        </div>
    );
};

export default CircleButton;