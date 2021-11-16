import React, { PureComponent } from 'react'
import Card from '../Components/Card'

class Popular extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            movies :[]
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(result => result.json())
        .then(result => this.setState({movies : result.results}))
    }
    render() {
        // console.log(" state movie",this.state.movies);
        const {movies} = this.state
        
        return (
            <div>
                <h1>popular </h1>
                {movies.map(movie => 
                <div className="container">
                    
                        
                            <Card 
                            image ={movie.poster_path} 
                            title ={movie.original_title}
                            sortie ={movie.release_date} 
                            description = {movie.overview}
                            />
                          
                    
                </div>
                )}
            </div>
            
        )
    }
}

export default Popular