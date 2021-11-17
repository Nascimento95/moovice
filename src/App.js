import React, { PureComponent } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Homepage from './Page/Homepage'
import Weekly from './Page/Weekly'
import WeeklyBattle from './Page/WeeklyBattle'
import Popular from './Page/Popular'
import PopularBattle from './Page/PopularBattle'
import Favorite from './Page/Favorite'
import NotFound from './Page/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Components/nav'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  // componentDidMount(){
  //   fetch("74ff4d5b18f55c304a239fadf716fe2f")
  //   .then(result => result.json())
  //   .then(result => console.log(result))
  // }

  render() {
    return (
      <>
       
        <BrowserRouter>
        <Nav />
        

        {/* Component qui représente la liste des routes */}
        <div className="container">
          
            <Switch>

              {/* Une route au singulier représente un url spécifique */}
              <Route exact path="/" component={Homepage} />
              <Route exact path="/weekly" component={Weekly} />
              <Route path="/weekly-battle" component={WeeklyBattle} />
              <Route exact path="/popular" component={Popular} />
              <Route path="/popular-battle" component={PopularBattle} />
              <Route path="/favorites" component={Favorite} />
              <Route path="*" component={NotFound} />
            </Switch>
          
        </div>
      </BrowserRouter>
      </>
    )
  }
}

export default App
