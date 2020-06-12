import React from 'react';
import MovieList from '../components/MovieList'

import {Title} from '../components/Title';
import SearchForm from '../components/SearchForm';


export default class Home extends React.Component{
            
    state={results:[]}
        
    _handleResults = (results) => {
      this.setState({results})
    }

    render(){
        return(
            <div>
            <Title>Search Movies</Title>
            <div className="SearchForm-wrapper">
              <SearchForm onResults={this._handleResults}></SearchForm>
            </div>
            {this.state.results.length === 0
            ? <p>Sin resultado</p>
            : <MovieList movies={this.state.results}></MovieList>
            }
    
          </div>
        )
    }

}