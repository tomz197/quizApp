import './HeaderStyle.css';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";


import React, { useState } from 'react';

function Header() {
    const [sidebarClass, setSidebarClass] = useState("hideSidebar");

    const handleSidebar = () => {
        setSidebarClass((sidebarClass === "hideSidebar") ? "showSidebar" : "hideSidebar")
    }

    return (
        <div id="Header">
            <Box bgcolor="primary.main" className="header">
                <div className="nav">
                    <Link to="/" id="nameLink">
                        <h2 id="name">QuizApp</h2>
                    </Link>
                </div>
                <div className="nav">
                    <ul>
                        <Link to="/">
                            <li className="navLink">Home</li>
                        </Link>
                        <Link to="/Create">
                            <li className="navLink">Create</li>
                        </Link>
                        <li className="navLink"><a href="https://tomz197.github.io/" target="_blank" rel="noreferrer">About me</a></li>
                        <li onClick={handleSidebar} className="burgerButton open"></li>
                    </ul>
                </div>
                <div className={"collapsableBG " + sidebarClass}></div>
            </Box>
            <div className={"collapsableBG " + sidebarClass}></div>
            <Box bgcolor="primary.main" className={"collapsable " + sidebarClass}>
                <span onClick={handleSidebar} className="burgerButton close"></span>
                <ul>
                    <Link to="/">
                        <li onClick={handleSidebar}>Home</li>
                    </Link>
                    <Link to="/Create">
                        <li onClick={handleSidebar}>Create</li>
                    </Link>
                    <li><a onClick={handleSidebar} href="https://tomz197.github.io/" target="_blank" rel="noreferrer">About me</a></li>
                </ul>
            </Box>
        </div >
    );
}

export default Header;