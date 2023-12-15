import React, { Component } from "react";
import Navbar from "../components/Navbar";

const Register = (props) => {
  return (
    <div>
      <Navbar />
      <div class="login-container">
        <div class="card card-tertiary">
          <div class="card-header">
            <span>Register</span>
          </div>
            <div class="card-body">
              <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                  <label>Username: </label><br />
                  <input type="text" className="field" />
                </div>
                <div className="form-group">
                  <label>Email Address: </label><br />
                  <input type="text" className="field" />
                </div>
                <div className="form-group">
                  <label>Password: </label><br />
                  <input type="text" className="field" />
                </div>
                <div className="form-group">
                  <label>Confirm Password: </label><br />
                  <input type="text" className="field" />
                </div>
                <div className="form-group">
                  <button type="submit" className="calculate-btn btn mr-2 mb-2 btn-primary">Register</button>
                </div>
              </form>
              <div>
                <p>Already a user? <a href="/login">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
}

      export default Register