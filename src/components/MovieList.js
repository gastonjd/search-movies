import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

export default class MovieList extends React.Component{
    static propTypes={
        movies:PropTypes.array
    }
    render(){
        const {movies} = this.props
        return (
            <div className='MovieList'>
                {
                    movies.map(movie => {
                        return (
                            <div className='Movie-Items' key={movie.imdbID}>
                                <Movie 
                                id={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                                />
                            
                            </div>
                        )   
                        
                      })
                }
            </div>
        )
    }

}