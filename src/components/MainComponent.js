import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './WatchComponent';
import { DISHES } from '../shared/dishes';

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
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default Main;
