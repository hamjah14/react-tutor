import React, {Component, Fragment} from "react";
import './Product.css';

class CardProduct extends Component{
    state = {
        order: 4,
        name: "hamjah"
    }

    handleCounterChange = (newVal) =>{ 
        this.props.onCounterChange(newVal);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () =>{
            this.handleCounterChange(this.state.order);
        }); 
    }

    handleMinus = () => {
        if(this.state.order > 0){  
            this.setState({
                order: this.state.order - 1
            }, () =>{
                this.handleCounterChange(this.state.order);
            }); 
        } else { 
            alert("Jumlah order tidak dapat dikurangi"); 
        }
    }

    render(){
        return(  
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYdItnZNfolCcDYZVp-OxdIq4zfFBzLTVAg&s" alt="" />
                </div>
                <p className="product-title">Daging Ayam Cucho</p>
                <p className="product-price">RP. 360.892</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button> 
                    <input type="text" value={this.state.order}/> 
                    <button className="plus"  onClick={this.handlePlus}>+</button>
                </div>
            </div> 
        )
    }
}

export default CardProduct;