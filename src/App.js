import './App.css';
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TemplateList from "./components/ui/TemplateList/TemplateList";
import Template from "./components/ui/Template/Template";
import {fetchTemplates} from "./store/reducers/TemplatesActions";
import {Route, Routes} from "react-router-dom";
import Editor from "./components/pages/Editor/Editor";
import TemplaterPage from "./components/pages/Templater/TemplaterPage";
import EditorNewPage from "./components/pages/Editor/EditorNewPage";
import EditorUpdatePage from "./components/pages/Editor/EditorUpdatePage";

function App() {
    return (
        <>
           {/*<TemplaterPage/>*/}
            {/*<Editor/>*/}
            <Routes>
                <Route path="/" element={<TemplaterPage/>}/>
                <Route path="/editor/new" element={<EditorNewPage/>}/>
                <Route path="/editor/:id" element={<EditorUpdatePage/>}/>
            </Routes>
        </>
    );
}

export default App;
