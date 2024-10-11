// libraries
import React, {Component, Fragment} from "react";
import { connect } from "react-redux";

// component
import CardProduct from "./CardProduct";

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
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>

                <CardProduct />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps) (Product);