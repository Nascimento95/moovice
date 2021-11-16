import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Nav extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <ul class="nav mt-5 fs-2">
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/weekly">weekly</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/weekly-battle">weekly-battle</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/popular">Popular</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/popular-battle">Popular-battle</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/favorites">Favorite</Link>
                </li>
                
            </ul>
        )
    }
}

export default Nav