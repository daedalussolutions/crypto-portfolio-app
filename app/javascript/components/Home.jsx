import React from "react";
import PortfolioContainer from "./PortfolioContainer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

export default () => (
  <div className="app-container">
    <Navbar />
    <PortfolioContainer />
  </div>
);