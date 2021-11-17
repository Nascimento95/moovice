import React, { PureComponent } from 'react'
import Card from '../Components/Card'

class Favorite extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            movies :[] ,
            favIds :this.getStorage(),
        }
        this.getStorage = this.getStorage.bind(this)
        this.getMovie = this.getMovie.bind(this)
    }
    componentDidMount(){
        this.state.favIds.forEach(id =>  {
            this.getMovie(id)
        });
    }

    getStorage(){
        const favorite = localStorage.getItem("favorite")
        const array = JSON.parse(favorite)
        if (!array){
            array = []
        }
        return array
        // console.log("dd",array);
    }
    getMovie(id){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(result => result.json())
        .then(result => this.setState({movies : [result, ...this.state.movies]}))
    }

    render() {
        console.log("mon state", this.state.movies);
        const {movies} =this.state
        return (
            <>
                <h1>Favorite</h1>
                {movies.map((movie, index)=> 
                    <Card 
                    onClick={() => {this.clik(movie.id, index)}}
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

export default Favorite