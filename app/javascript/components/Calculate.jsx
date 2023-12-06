import React, { Component } from "react";

const Calculate = (props) => {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label>Enter Amount of {props.active_currency.name} Owned:</label><br/>
            <input onChange={props.handleChange} autoComplete="off" type="text" name="amount" value={props.amount} className="field"/>
          </div>
          <div className="form-group">
            <button type="submit" className="calculate-btn btn mr-2 mb-2 btn-primary" value="Calculate">Calculate</button>
          </div>
        </form>
      </div>
    )
  }
  
  export default Calculate