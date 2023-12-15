import React, { Component } from "react";
import Navbar from "../components/Navbar"

const Login = (props) => {
  return (
    <div>
      <Navbar />
      <div class="about-container">
        <div class="card card-tertiary">
          <div class="card-header">
            <span>Login</span>
          </div>
          <div class="card-body">
            <form onSubmit={props.handleSubmit}>
              <div className="form-group">
                <label>Email Address: </label><br />
                <input type="text" className="field" />
              </div>
              <div className="form-group">
                <label>Password: </label><br />
                <input type="text" className="field" />
              </div>
              <div className="form-group">
                <button type="submit" className="calculate-btn btn mr-2 mb-2 btn-primary">Login</button>
              </div>
            </form>
            <div>
              <p>New user? <a href="/register">Register</a></p>
              <a href="#">Forgot passsword?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login