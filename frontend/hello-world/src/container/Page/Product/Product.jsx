// libraries
import React, {Component, Fragment} from "react"; 

// component
import { RootContext } from "../../Home/Home";
import CardProduct from "./CardProduct";

// context
import { GlobalConsumer } from "../../../context/GlobalContext";

// stayle
import './Product.css';

class Product extends Component{ 

    render(){
        return( 
            <Fragment>
                <p>Product</p>
                <hr></hr>
                
                <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="troley">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>

                <CardProduct />
            </Fragment> 
        )
    }
}
 
export default GlobalConsumer(Product);