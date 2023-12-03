import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar class="navbar navbar-expand-lg navbar-dark navbar-tertiary justify-content-between">
            <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
                <li class="nav-item">
                    <a href="#" class="nav-link" role="button">
                        <span class="nav-link-inner-text">📺 Home</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="docs/introduction.html" class="nav-link" role="button">
                        <span class="nav-link-inner-text">📕 About</span>
                    </a>
                </li>
            </ul>
            <div class="time text-center">
                <span class="time text-uppercase text-white">1:47 PM</span>
            </div>
        </Navbar>
    );
};

export default AppNavbar;