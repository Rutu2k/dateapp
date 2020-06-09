import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './WatchComponent';
import { DISHES } from '../shared/dishes';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return(
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route exact path="/contactus" component={()=><Contact/>}/>
          <Route exact path="/aboutus" component={()=><About/>}/>
          <Redirect to="/home" />
        </Switch>
        
      </div>
    );
  }
}

export default Main;
