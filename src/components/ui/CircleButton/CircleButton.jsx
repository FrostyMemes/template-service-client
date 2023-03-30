import React from 'react';
import "./CircleButton.scss";
import {Routes, Route, Link} from "react-router-dom";
import "font-awesome/css/font-awesome.min.css"

const CircleButton = () => {

    const activateButton = () => {
        document
            .getElementById('circularMenu')
            .classList.toggle('active');
    }

    return (
        <div id="circularMenu" className="circular-menu">
            <a className="circular-floating-btn" onClick={activateButton}>
                <i className="fa fa-bars"></i>
            </a>
            <menu className="circular-items-wrapper">
                <a href="#" className="fa fa-plus circular-menu-item"></a>
                <a href="#" className="fa fa-pencil circular-menu-item"></a>
                <a href="#" className="fa fa-trash circular-menu-item"></a>
            </menu>
        </div>
    );
};

export default CircleButton;