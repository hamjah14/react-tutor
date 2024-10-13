import React, {Component} from "react";
import './Product.css';

class Counter extends Component{
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
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button> 
                <input type="text" value={this.state.order}/> 
                <button className="plus"  onClick={this.handlePlus}>+</button>
            </div> 
        )
    }
}

export default Counter;