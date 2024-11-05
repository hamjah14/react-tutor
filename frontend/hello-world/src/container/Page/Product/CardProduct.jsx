import React, { Component } from "react";

// component
import Counter from "./Counter";

// style
import './Product.css';

class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYdItnZNfolCcDYZVp-OxdIq4zfFBzLTVAg&s" alt="" />
                </div>
                <p className="product-title">Daging Ayam Cucho</p>
                <p className="product-price">RP. 360.892</p>

                <Counter />
            </div>
        )
    }
}

export default CardProduct;