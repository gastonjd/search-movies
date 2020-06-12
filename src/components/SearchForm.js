import React from 'react';


const API_KEY = 'dbebb1a9';
export default class SearchForm extends React.Component{
    state={
        imputMovie:''
    }
    _handleChange = (e) => {
        this.setState({
            imputMovie: e.target.value
        })
    }
    _handSubmit = (e) => {
        e.preventDefault()
        const {imputMovie} = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${imputMovie}
        `).then(res => res.json())
        .then(results => {
            const {Search, totalResults} = results
            this.props.onResults(Search)
        })
    }
    render(){
        return(
            <form onSubmit={this._handSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="Movie to search" onChange={this._handleChange}/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>

          
            
        );
    }
}