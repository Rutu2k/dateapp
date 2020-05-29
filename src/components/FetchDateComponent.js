import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import axios from 'axios';

class FetchDate extends Component{
    state = {
        date: ''
      }
    
      componentDidMount() {
        setInterval(() => {
          axios.get(`http://localhost:9000/`).then(res => {
          console.log(res);
          this.setState({date: res.data});
        },10000);
        })
        
      }
  
    
    render() {
        return(
           <Card className="bg-primary text-white">
               <CardHeader className="bg-primary text-white">LIVE DATE</CardHeader>
               <CardBody>
               <h1>{this.state.date}</h1>
               </CardBody>
           </Card>
        );
    }
}
export default FetchDate;
