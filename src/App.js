import './App.css';
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TemplateList from "./components/ui/TemplateList/TemplateList";
import Template from "./components/ui/Template/Template";
import {fetchTemplates} from "./store/reducers/TemplateActions";
import {Route, Routes} from "react-router-dom";
import EditorPage from "./components/pages/Editor/EditorPage";
import TemplaterPage from "./components/pages/Templater/TemplaterPage";

function App() {
    return (
        <>
           <TemplaterPage/>
            {/*<EditorPage/>*/}
            <Routes>
                <Route path="/:id" element={<TemplaterPage/>}/>
                <Route path="/Editor" element={<EditorPage/>}/>
            </Routes>
        </>
    );
}

export default App;
