import React, { PureComponent } from 'react'
import Card from '../Components/Card'
import moment from 'moment'
// si je deckare mes variable en dehort du class les variable sont accesible partout 
let today = moment().format("YYYY-MM-DD");
const lasWeek = moment().subtract(7,"d").format("YYYY-MM-DD")

class WeeklyBattle extends PureComponent {
    constructor() {
        super()

        this.state = {
            movies :[],
            currentBattle : 0
        }
        this.handleCardClik = this.handleCardClik.bind(this)
    }
    componentDidMount(){
        // let today = moment().format("YYYY-MM-DD");
        // const lasWeek = moment().subtract(7,"d").format("YYYY-MM-DD")
        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lasWeek}&primary_release_date.lte=${today}&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(result => result.json())
        .then(result => this.setState({movies : result.results}))
        
    }
    handleCardClik (){
        this.setState({currentBattle: this.state.currentBattle +2})
    }

    render() {
        const {movies} =this.state
        if( movies.length === 0){
            return null
        }
        const films = [movies[this.state.currentBattle], movies[this.state.currentBattle +1]]
        return (
            <div>
                <h1>popular </h1>
                <p>{today} </p>
                {movies.map(movie => 
                <div className="container">
                    
                        
                            <Card 
                            onClick = {this.handleCardClik}
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

export default WeeklyBattle