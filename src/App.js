import React from "react";
import { Component } from "react";
import SearchForm from "./SearchForm";
import './App.css';

class App extends Component {
    //The consturctor
    constructor(props){
        super(props);
        this.state = {
            jokes:[],
            isFetchingJoke:false,
            query:''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.searchJokes = this.searchJokes.bind(this); 
    }
    //calling a fetching function right after the page loads
    componentDidMount(){
       // this.searchJokes();

    }

    searchJokes(event,limit) {
        event.preventDefault();
        this.setState({isFetchingJoke:true})
       // console.log("button clicked");
        fetch(`https://icanhazdadjoke.com/search?term=${this.state.query}&limit=${limit}`,{
            method:'GET',
            headers : {
                Accept: 'application/json'
            }
        })
        .then(response => response.json())
        .then(json  => {
            let jokes = json.results;
            //console.log(jokes);
            this.setState({jokes, isFetchingJoke:false})
        });

       
    }

 

  onSearchChange(value){
      
      this.setState({query:value})
  }

  
  
    //The renderer
    render() {
        return(
            <div className="App">
                <p className='title'>Dad Joke Generator</p>
             <SearchForm luckyCall = {event=>this.searchJokes(event,1)}jokesArray = {this.state.jokes} searchQuery = {this.state.query} onFormSubmit={(event) =>this.searchJokes(event,5)} onSearchValueChange={this.onSearchChange} isSearching={this.state.isFetchingJoke}/>
            
            </div>
        )
    }
}


export default App