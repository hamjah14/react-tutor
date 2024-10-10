// libraries
import React, {Component, Fragment} from "react";

// component
import CardProduct from "./CardProduct";

// stayle
import './Product.css';

class Product extends Component{
    state = {
        order: 4,
        name: "hamjah"
    }
  
    handleCounterChange = (newValue) =>{
        this.setState({
            order : newValue
        })
    }

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
                        <i class="fa-solid fa-cart-shopping"></i>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>

                <CardProduct onCounterChange = {(value) => this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default Product;