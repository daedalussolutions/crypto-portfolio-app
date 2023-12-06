import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'
import Skeleton from '../../assets/images/skeleton-coffee.gif';

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const portfolioItems = this.props.portfolio.map((item, index) => <PortfolioItem key={index} item={item} />)
    const total = this.props.portfolio.reduce((total, curr) => total + curr.value, 0)
    const formatted_total = total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

    return (
      <div>
        <div className='account-buttons'>
          <button className="btn mr-2 mb-2 btn-primary">Sign Up</button>
          <button className="btn mr-2 mb-2 btn-primary">Login</button>
          <img src={Skeleton} height={200}></img>
        </div>
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