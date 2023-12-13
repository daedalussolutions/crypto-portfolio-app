import React, { Component } from 'react'
import { render } from 'react-dom';

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="header">Currency:</div>
            <div className="text">{this.props.item.currency.name}</div>
          </div>

          <div className="col">
            <div className="header">Current Price:</div>
            <div className="text">${this.props.item.current_price}</div>
          </div>

          <div className="col">
            <div className="header">Amount In Your Portfolio:</div>
            <div className="text">{this.props.item.amount}</div>
          </div>

          <div className="col">
            <div className="header">Current Value:</div>
            <div className="text">${this.props.item.value}</div>
          </div>
          <div className="col">
            <button className="btn mr-2 mb-2 btn-primary" name="delete" key={this.props.index} data-id={this.props.item.currency.id} onClick={this.props.handleDelete} value={this.props.name} >Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;