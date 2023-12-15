import React, { Component } from "react";
import Search from "./Search";
import Calculate from "./Calculate";
import { render } from "react-dom";
import Portfolio from "./Portfolio";
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
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAmount = this.handleAmount.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(e) {
        /* this.setState({
            [e.target.name]: e.target.value
        }) */

        axios.post('https://localhost:3000/search', {
            search: e.target.value
        }, { withCredentials: false })
            .then((data) => {
                console.log(data)
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
        const activeCurrency = this.state.search_results.find(item => item.id == parseInt(id))
        this.setState({
            active_currency: activeCurrency,
            search_results: []
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let currency = this.state.active_currency
        let amount = this.state.amount

        axios.post('https://localhost:3000/calculate', {
            id: currency.id,
            amount: amount
        }, { withCredentials: false })
            .then((data) => {
                this.setState({
                    amount: '',
                    active_currency: null,
                    portfolio: [...this.state.portfolio, data.data]
                })
            })
            .catch((err) => console.log(err))
    }

    handleAmount = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleDelete = (e) => {
        console.log("handleDelete called")
        axios.delete(`https://localhost:3000/delete`,
        {delete: e.target.value}, { withCredentials: false })
            .then((response) => {
                if (response.data.success) {
                    // Currency deleted successfully
                    this.setState({
                        // Update your state to remove the deleted currency
                        portfolio: this.state.portfolio.filter(currency => currency.id !== currency)
                    });
                } else {
                    // Failed to delete currency
                    console.error(response.data.message);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    

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
            <div className="grid">
                <div className="left card card-tertiary">
                    <div className="card-header text-center">
                        <span>Search</span>
                    </div>
                    {searchOrCalculate}
                </div>
                <div className="right card card-secondary">
                    <div className="card-header text-center">
                        <span>Portfolio</span>
                    </div>
                    <Portfolio 
                    portfolio={this.state.portfolio}
                    handleDelete={this.handleDelete} />
                </div>
            </div>
        )
    }
}

export default PortfolioContainer