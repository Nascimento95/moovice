import React, { PureComponent } from 'react'

class Card extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const {image , title , sortie, description , onClick} = this.props
        console.log(this.props);
        return (
            <div className="row mt-5 ">
                <div className="col-6">
                    <div onClick={onClick} className="card border border-4" style={{width: "18rem"}}>
                        <img src={`https://image.tmdb.org/t/p/w300/${image}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text"> <span className="fw-bold"> description :</span> {description} </p>
                            <p className=""><span className="fw-bold">date de sortie :</span> {sortie}  </p>
                        </div>
                    </div>
                </div>
            </div>   
                
            
        )
    }
}

export default Card