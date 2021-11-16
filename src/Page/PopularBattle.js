import React, { PureComponent } from 'react'
import Card from '../Components/Card'
class PopularBattle extends PureComponent {
    constructor() {
        super()

        this.state = {
            movies : [],
            currentBattle : 0,
            compareMovie: 2,
            favorite : []
            
            
        }
        this.clik = this.clik.bind(this)
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(result => result.json())
        .then(result => this.setState({movies : result.results}))
        
    }
    clik(id,index){
        let addition = this.state.compareMovie + 2
        this.setState({
            compareMovie:   addition,
        })
        // on regarde si local storage a une valeur dans favorite
        const favorite = localStorage.getItem("favorite")
        // on fait une condition pour dire si le  local storage est vide alor tu me créé favorite plus une valeur qui l'id des mes film
        
        if(!favorite){
            // on créé favorite et on met la valeur dans local storage id et mi en array transfomer en string
            localStorage.setItem("favorite", JSON.stringify([id]))
        }else{
            // on recup le tableau en string quon remet en tableau on push les nouveau id dedand et on remet dans le local storage 
            let array = JSON.parse(favorite)
            array.push(id)
            localStorage.setItem("favorite", JSON.stringify(array))
        }
        //  condition qui dit si on a parcouru toute la liste de film tu me le dit et tu vide le local storage et tu me remet le state a sa valeur d'origine
        if (this.state.compareMovie === 20){
            console.log("Vous avez parcouru tous les films !")
            localStorage.clear()
            this.setState({compareMovie: 2})
        }
            
    }

    render() {
        console.log("state movie",this.state.compareMovie);
        const {movies , compareMovie , compareMovie1} = this.state
        
        const film = movies.filter((movie,index) => index < compareMovie && index >= compareMovie-2 )
        // console.log("film ", film);
        return (
            <>
                <h1>popularBattle</h1>
                
                {film.map((movie, index)=> 
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

export default PopularBattle