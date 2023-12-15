import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Registration from "../components/Registration";
import About from "../components/About";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Registration />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  </Router>
);