import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './WatchComponent';

class Main extends Component{
  render(){
    return(
      <div>
        <Header></Header>
        <Menu/>
      </div>
    );
  }
}

export default Main;
