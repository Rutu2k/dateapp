import React, { Component } from 'react';
import { Media, Button, Modal, ModalBody, ModalHeader,} from 'reactstrap';

const imgStyle = {
    maxHeight: 300,
    maxWidth: 300,
}
class Menu extends Component {
    constructor(props) {
        super(props);

        this.state= {
            isBuyOpen :false
        };
        this.toggleBuy = this.toggleBuy.bind(this);
    }
    toggleBuy() {
        this.setState({
            isBuyOpen: !this.state.isBuyOpen
        });
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
                    <Button outline>Read More</Button>
                </Media>

                <Media right middle className="sm mt-5">
                    <Button className="btn"><span className="fa fa-bookmark fa"></span> Add to Cart</Button>
                    <br></br>
                    <br></br>
                    <Button className="btn" onClick= {this.toggleBuy}><span className="fa fa-tag fa"></span> Buy Item</Button>
                </Media>
            </Media>
            <Modal isOpen={this.state.isBuyOpen} toggle={this.toggleBuy}>
                <ModalHeader>
                    Buy Item
                </ModalHeader>
                <ModalBody>
                    <h5>Our Precious Customer,<br></br> We are really sorry for your inconvenience! Our online payment feature is under construction right now! So stay tuned,and we appreciate your time!<br></br> Thank you! </h5>
                </ModalBody>
            </Modal>
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