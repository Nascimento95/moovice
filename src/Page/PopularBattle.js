import React, { PureComponent } from 'react'
import Card from '../Components/Card'
class PopularBattle extends PureComponent {
    constructor() {
        super()

        this.state = {
            movies : [],
            currentBattle : 0,
            compareMovie: 2
            
        }
        this.clik = this.clik.bind(this)
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(result => result.json())
        .then(result => this.setState({movies : result.results}))
        
    }
    clik(){
     
     console.log("sa clik");
    }

    render() {
        console.log("state movie",this.state.movies);
        const {movies , compareMovie} = this.state
        
        const film = movies.filter((movie,index) => index < compareMovie )
        // console.log("film ", film);
        return (
            <>
                <h1>popularBattle</h1>
                
                {film.map((movie, index)=> 
                    <Card 
                    onclik ={this.clik}
                    id = {index}
                    image ={movie.poster_path} 
                    title ={movie.original_title}
                    sortie ={movie.release_date} 
                    description = {movie.overview}
                    />   
                )}
                
            </>
        )
    }
}

export default PopularBattle