import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const portfolioItems = this.props.portfolio.map((item, index) => <PortfolioItem key={index} item={item} data-id={item.id} onClick={this.props.handleDelete} onChange={this.props.onChange}/>)
    const total = this.props.portfolio.reduce((total, curr) => total + curr.value, 0)
    const formatted_total = total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

    return (
      <div>
        <div className="portfolio-value">
          <h2 className="portfolio-value--header">Your Total Portfolio Value Is:</h2>
          <h3 className="portfolio-value--content">${formatted_total}</h3>
        </div>
        <h3 className="portfolio-items">
          {portfolioItems}
        </h3>
        <div>

        </div>
      </div>
    )
  }
}

export default Portfolio