import React, { Component } from 'react';
import axios from 'axios';
import { Card,CardBody, CardHeader } from 'reactstrap';

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
          <Card className="mt-5 ml-4 p-5 datecard text-center"  border="light" style={{width:"85%",borderRadius: 0 }}>
          <CardHeader><h3 className="text">LIVE DATE</h3></CardHeader>
            <CardBody>
              <h3 className="textdate">{this.state.date}</h3>
            </CardBody>
          </Card>
        );
    }
}
export default FetchDate;
