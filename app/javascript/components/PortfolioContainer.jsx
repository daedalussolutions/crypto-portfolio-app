import React, { Component } from "react";
import Search from "./Search";
import Calculate from "./Calculate";
import { render } from "react-dom";
import axios from "axios";

class PortfolioContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            portfolio: [],
            search_results: [],
            active_currency: null,
            amount: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleChange(e) {
        /* this.setState({
            [e.target.name]: e.target.value
        }) */

        axios.post('http://127.0.0.1:3000/search', {
            search: e.target.value
        }, { withCredentials: false })
            .then((data) => {
                this.setState({
                    search_results: [...data.data.currencies]
                })
            })
            .catch((data) => {
                debugger
            })
        console.log(this.state.search_results)
    }

    handleSelect(e) {
        e.preventDefault()
        const id = e.target.getAttribute('data-id')
        const activeCurrency = this.state.search_results.filter(item => item.id == parseInt(id))
        this.setState({
            active_currency: activeCurrency[0],
            search_results: []
        })
        debugger
    }

    handleSubmit = (e) => {
        e.preventDefault()
    
        let currency = this.state.active_currency
        let amount = this.state.amount
    
        axios.post('/calculate', {
          id: currency.id,
          amount: amount
        })
        .then( (data) => {
          this.setState({
            amount: '',
            active_currency: null,
            portfolio: [...this.state.portfolio, data.data]
          })
        })
        .catch( (err) => console.log(err))
      }
    
      handleAmount = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }

    render() {
        const searchOrCalculate = this.state.active_currency ?
            <Calculate
                handleChange={this.handleAmount}
                handleSubmit={this.handleSubmit}
                active_currency={this.state.active_currency}
                amount={this.state.amount}
            /> :
            <Search
                handleSelect={this.handleSelect}
                searchResults={this.state.search_results}
                handleChange={this.handleChange} />
        return (
            <div>
                {searchOrCalculate}
            </div>
        )
    }
}

export default PortfolioContainer