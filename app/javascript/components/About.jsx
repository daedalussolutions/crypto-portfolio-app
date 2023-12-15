import React, { Component } from "react";
import Navbar from "../components/Navbar"

const About = (props) => {
    return(
        <div>
            <Navbar />
            <div class="about-container">
            <div class="card card-tertiary">
                <div class="card-header">
                    <span>About</span>
                </div>
                <div class="card-body">
                    <p class="card-text p1">This a crypto portfolio calculator web app developed using Ruby on Rails 7 with a React frontend. The app uses the CoinMarketCap API
                    to provide accurate up-to-date prices of coins.</p>
                    <p class="card-text p1">The design of the sight is based on Windows 95 using classes and assets from <a href="https://themesberg.com/product/ui-kit/windows-95-ui-kit">Themesberg</a></p>
                    <div class="d-flex mt-3">
                        <a href="https://dylancassell.ca" class="btn btn-sm mr-2 btn-primary border-dark" type="button"><span class="btn-text">Website</span></a>
                        <a href="https://github.com/daedalussolutions" class="btn btn-sm btn-primary" type="button"><span class="btn-text">Github</span></a>
                    </div>
                </div>
            </div>
                </div>
        </div>
    )
  }
  
  export default About