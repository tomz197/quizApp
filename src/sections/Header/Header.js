import './HeaderStyle.css';
import Box from '@mui/material/Box';


import React, { useState } from 'react';

function Header() {
    const [sidebarClass, setSidebarClass] = useState("hideSidebar");

    const handleSidebar = () => {
        setSidebarClass((sidebarClass === "hideSidebar") ? "showSidebar" : "hideSidebar")
    }

    return (
        <div id="Header">
            <Box bgcolor="primary.main" className="header">
                <div className="nav"><h2><a href="." id="name">QuizApp</a></h2></div>
                <div className="nav">
                    <ul>
                        <li className="navLink"><a href=".">Home</a></li>
                        <li className="navLink"><a href=".">Create</a></li>
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
                    <li><a onClick={handleSidebar} href=".">Home</a></li>
                    <li><a onClick={handleSidebar} href=".">Create</a></li>
                    <li><a onClick={handleSidebar} href="https://tomz197.github.io/" target="_blank" rel="noreferrer">About me</a></li>
                </ul>
            </Box>
        </div >
    );
}

export default Header;