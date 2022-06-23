import './HeaderStyle.css';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import RedirectAlert from './RedirectAlert'

import {QuizContext} from '../../QuizContext'
import React, { useState, useContext } from 'react';

function Header() {
    // eslint-disable-next-line no-unused-vars
    const {quizStarted, setQuizStarted} = useContext(QuizContext);
    const [sidebarClass, setSidebarClass] = useState("hideSidebar");

    const handleSidebar = () => {
        setSidebarClass((sidebarClass === "hideSidebar") ? "showSidebar" : "hideSidebar")
    }

    return (
        <div id="Header">
            <Box bgcolor="primary.main" className="header">
                <div className="nav">
                    <Link to="quizApp/" id="nameLink">
                        <h2 id="name">QuizApp</h2>
                    </Link>
                </div>
                <div className="nav">
                    <ul>
                        <Link to="quizApp/">
                            <li className="navLink">Home</li>
                        </Link>
                        {!quizStarted ? 
                            <Link to="quizApp/Create"><li className="navLink">Create</li></Link>
                            :
                            <RedirectAlert redirect="quizApp/Create" element={<li className="navLink">Create</li>}/>
                        }
                        <li className="navLink"><a href="https://tomz197.github.io/" target="_blank" rel="noreferrer">About me</a></li>
                        <li onClick={handleSidebar} className="burgerButton open"></li>
                    </ul>
                </div>
                <div className={"collapsableBG " + sidebarClass}></div>
            </Box>
            <div onClick={handleSidebar} className={"collapsableBG " + sidebarClass}></div>
            <Box bgcolor="primary.main" className={"collapsable " + sidebarClass}>
                <span onClick={handleSidebar} className="burgerButton close"></span>
                <ul>
                    <Link to="quizApp/">
                        <li onClick={handleSidebar}>Home</li>
                    </Link>
                    {!quizStarted ? 
                        <Link to="quizApp/Create"><li onClick={handleSidebar}>Create</li></Link>
                        :
                        <RedirectAlert redirect="quizApp/Create" element={<li onClick={handleSidebar}>Create</li>}/>
                    }
                    <li><a onClick={handleSidebar} href="https://tomz197.github.io/" target="_blank" rel="noreferrer">About me</a></li>
                </ul>
            </Box>
        </div >
    );
}

export default Header;