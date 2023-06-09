import React, {useEffect, useState} from 'react';
import "./Template.scss";
import $ from "jquery"



const Template = ({markup, DOMRef, sendDocumentHandler}) => {

    const template = `
        <div class="template-element">
           <div class="template-input-element">
                <label for="input-id" class="template-label">input</label>
                <input type="text" id="input-id" placeholder="test" class="template-input">
           </div>
        </div>
            
        <div class="template-element">
           <div class="template-textarea-element">
                <label for="textarea-id" class="template-label">textarea</label>
                <textarea placeholder="test" id="textarea-id" class="template-textarea"></textarea>
           </div>
        </div>
        
        <div class="template-element">
        <label for="select-id" class="template-label">select</label>
            <div class="template-select-element">
                  <select id="select-id" class="template-select">
                      <option class="template-option">Option 1</option>
                      <option class="template-option">Option 2</option>
                      <option class="template-option">Last long option</option>
                  </select>
            </div>
        </div>
        
        <div class="template-element">
        <label for="radio-id" class="template-label">radio</label>
            <div id="radio-id" class="template-radio-element">             
                <div class="template-radio">
                    <input id="radio-1" name="radio" type="radio">
                    <label for="radio-1" class="radio-label">Checked</label>
                </div>
                <div class="template-radio">
                    <input id="radio-2" name="radio" type="radio">
                    <label  for="radio-2" class="radio-label">Unchecked</label>
                </div>
            </div>
        </div>
                      
        <div class="template-element">
            <div id="check-id" class="template-checkbox-element">
                <label for="check-id" class="template-label">check</label>
            <div class="template-checkbox">
                <input id="check-1" name="check" type="checkbox">
                <label for="check-1" class="checkbox-label">Checked</label>
            </div>
            <div class="template-check">
                <input id="check-2" name="check" type="checkbox">
                <label  for="check-2" class="checkbox-label">Unchecked</label>
            </div>
            </div>
        </div>
        <div class="template-error">
            Error
        </div>
    `

    return (
        <div className="template-block">
            <div ref={DOMRef} id="template-data" dangerouslySetInnerHTML={{__html: markup}}/>
            {markup &&
                <div className="template-element">
                    <input className="button-send-template"
                           value="Отправить"
                           type="button"
                           onClick={e => sendDocumentHandler()}/>
                </div>
            }
        </div>
    );
};

export default Template;