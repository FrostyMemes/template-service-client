import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import "./Template.scss";


const Template = () => {

    //const template = useSelector(state => state.templates.currentTemplate)
    const template = `
        <div class="template-element">
           <div class="template-input-block">
                <input type="text" placeholder="test" class="template-input">
           </div>
        </div>
            
        <div class="template-element">
           <div class="template-textarea-block">
                <textarea placeholder="test" class="template-input"> </textarea>
           </div>
        </div>
        
        <div class="template-element">
            <div class="template-select-block">
                 <label>
                  <select class="template-select">
                      <option class="template-option">Option 1</option>
                      <option class="template-option">Option 2</option>
                      <option class="template-option">Last long option</option>
                  </select>
                </label> 
            </div>
        </div>
        
        <div class="template-element">
            <div class="template-radio-block">
                <div class="radio">
                    <input id="radio-1" name="radio" type="radio" checked>
                    <label for="radio-1" class="radio-label">Checked</label>
                </div>
    
                <div class="radio">
                    <input id="radio-2" name="radio" type="radio">
                    <label  for="radio-2" class="radio-label">Unchecked</label>
                </div>
            </div>
        </div>
        
        
        <div class="template-element">
            <div class="template-checkbox-block">
            <div class="template-checkbox">
                <label class="checkbox style">
                 <input type="checkbox"/>
                  <div class="checkbox__checkmark"></div>
                    <div class="checkbox__body">Style C</div>
                </label>
                </div>
                <div class="template-checkbox">
                <label class="checkbox style">
                 <input type="checkbox"/>
                  <div class="checkbox__checkmark"></div>
                    <div class="checkbox__body">Style B</div>
                </label>
                </div>
              </div>
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