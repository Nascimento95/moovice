import React, { PureComponent } from 'react'
// import Card from '../Components/Card'

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
        return array
        console.log("dd",array);
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
                {movies.map( movie =>
                    // <p> {movie.poster_path} </p>
                    <div className="row mt-5 ">
                        <div className="col-6">
                            <div  className="card border border-4" style={{width: "18rem"}}>
                                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path} `} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.original_title}</h5>
                                    <p className="card-text"> <span className="fw-bold"> description :</span> {movie.overview} </p>
                                    <p className=""><span className="fw-bold">date de sortie :</span> {movie.release_date}  </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                        // original_title , overview ,release_date
                ) }

                {/* <Card  
                onClick={this.getStorage} 
                
                /> */}
            </>
        )
    }
}

export default Favorite