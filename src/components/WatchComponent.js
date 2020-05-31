import React, { Component } from 'react';
import { Media, Button} from 'reactstrap';


const imgStyle = {
    maxHeight: 300,
    maxWidth: 300,
}
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                    id: 0,
                    name:'Wooden Will',
                    image: 'assets/images/3.jpg',
                    category: 'mains',
                    price:'1460.00',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                 {
                    id: 1,
                    name:'Pride',
                    image: 'assets/images/2.jpg',
                    category: 'appetizer',
                    price:'1900.00',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        
                },
                {
                    id: 2,
                    name:'Modern Analog Clock',
                    image: 'assets/images/1.jpg',
                    category: 'appetizer',
                    price:'1570.20',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
                 {
                    id: 3,
                    name:'Vintage Diva',
                    image: 'assets/images/4.jpg',
                    category: 'dessert',
                    price:'2500.00',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
                 ],
          };
      }

    
    render() {
    const menu = this.state.dishes.map((dish) => {
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
                <a href="#">Read More</a>
                </Media>

                <Media right middle className="sm mt-5">
                    <Button className="btn"><span className="fa fa-info fa"></span> Add to Cart</Button>
                    <br></br>
                    <br></br>
                    <Button className="btn"><span className="fa fa-info fa"></span> Buy Item</Button>
                </Media>
            </Media>
            <hr></hr>
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