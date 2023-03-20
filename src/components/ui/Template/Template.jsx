import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import "./Template.scss";


const Template = () => {

    //const template = useSelector(state => state.templates.currentTemplate)
    const template = `
        <div class="template-input">
            <input type="text" placeholder="test">
        </div>
        
        
        <div class="template-textarea">
            <textarea placeholder="test"> </textarea>
        </div>
        
        
        <div class="template-select">
        
        
        </div>
        
        
        <div class="template-radio">
            <div class="radio">
                <input id="radio-1" name="radio" type="radio" checked>
                <label for="radio-1" class="radio-label">Checked</label>
            </div>

            <div class="radio">
                <input id="radio-2" name="radio" type="radio">
                <label  for="radio-2" class="radio-label">Unchecked</label>
            </div>
        </div>
        
        
        <div class="template-checkbox">
        <label class="checkbox style">
  <input type="checkbox"/>
  <div class="checkbox__checkmark"></div>
  <div class="checkbox__body">Style C</div>
</label>
        
        </div>
    `

    return (
        <div className="template-block">
            {/*<div dangerouslySetInnerHTML={{__html: template?.markup}}></div>*/}
            <div dangerouslySetInnerHTML={{__html: template}}></div>
        </div>
    );
};

export default Template;