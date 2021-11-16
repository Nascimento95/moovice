import React, { PureComponent } from 'react'
import Card from '../Components/Card'
import moment from 'moment';

class Weekly extends PureComponent {
    constructor() {
        super()

        this.state = {
            movies :[]
        }
    }
    componentDidMount(){
        fetch("http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(result => result.json())
        .then(result => this.setState({movies : result.results}))
    }

    render() {
        const {movies} =this.state
        let heure = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        console.log(heure);
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

export default Weekly