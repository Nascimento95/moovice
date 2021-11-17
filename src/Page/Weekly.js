import React, { PureComponent } from 'react'
import Card from '../Components/Card'
import moment from 'moment'
// si je deckare mes variable en dehort du class les variable sont accesible partout 
let today = moment().format("YYYY-MM-DD");
const lasWeek = moment().subtract(7,"d").format("YYYY-MM-DD")

class Weekly extends PureComponent {
    constructor() {
        super()

        this.state = {
            movies :[]
        }
    }
    componentDidMount(){
        // let today = moment().format("YYYY-MM-DD");
        // const lasWeek = moment().subtract(7,"d").format("YYYY-MM-DD")
        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lasWeek}&primary_release_date.lte=${today}&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(result => result.json())
        .then(result => this.setState({movies : result.results}))
        
    }

    render() {
        const {movies} =this.state
        let heure = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        console.log("l'heure", heure);
        return (
            <div>
                <h1>popular </h1>
                <p>{today} </p>
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