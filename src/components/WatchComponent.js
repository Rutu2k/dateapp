import React, { Component } from 'react';
import { Media, Button,} from 'reactstrap';

const imgStyle = {
    maxHeight: 300,
    maxWidth: 300,
}
class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    const menu = this.props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12  mt-5">
            <Media tag="li">
                <Media left middle className="sm">
                    <Media object src={dish.image} style={imgStyle} alt={dish.name} />
                </Media>

                <Media body className="ml-5 mt-5 mr-4">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                    <h5 >Rs.{dish.price}</h5>
                    <Button onClick= {this.toggleComment}>Read More</Button>
                </Media>

                <Media right middle className="sm mt-5">
                    <Button className="btn"><span className="fa fa-bookmark fa"></span> Add to Cart</Button>
                    <br></br>
                    <br></br>
                    <Button className="btn"><span className="fa fa-tag fa"></span> Buy Item</Button>
                </Media>
            </Media>
            </div>
        );
    });

    return (
        <div className="container">
        <div className="row">
            <Media list>
                {menu}
            </Media>
        </div>
        </div>
    );
    }
}


export default Menu;