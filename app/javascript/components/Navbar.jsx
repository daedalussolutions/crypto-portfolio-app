import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark navbar-tertiary justify-content-between">
            <ul className="navbar-nav navbar-nav-hover flex-row align-items-center">
                <li className="nav-item">
                    <a href="#" className="nav-link" role="button">
                        <span className="nav-link-inner-text">📺 Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="docs/introduction.html" className="nav-link" role="button">
                        <span className="nav-link-inner-text">📕 About</span>
                    </a>
                </li>
            </ul>
            <div className="time text-center">
                <span className="time text-uppercase text-white">1:47 PM</span>
            </div>
        </Navbar>
    );
};

export default AppNavbar;