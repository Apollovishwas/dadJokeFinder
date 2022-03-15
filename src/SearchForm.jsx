import React from "react";
import { Component } from "react";
import './App.css'
class SearchForm extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return(
            <form className="search-form" onSubmit={this.props.onFormSubmit}>
            <input placeholder="enter search term" onChange={event => this.props.onSearchValueChange(event.target.value)}/>
            <div className="ButtonContainer">
            <button>search</button>
            {/* <p>{this.props.searchQuery}</p> */}
            <button onClick={this.props.luckyCall}>I'm Feeling lucky</button>
            </div>
            <ul>{this.props.jokesArray.map(item=> <li key = {item.id}>{item.joke}</li>)}</ul>
        </form>
        )
    }
}

export default SearchForm