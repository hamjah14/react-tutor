import React, {Component} from "react";
import { connect } from "react-redux";

// style
import './Product.css'; 
import ActionType from '../../../redux/reducer/globalActionType'; 

class Counter extends Component{  
    render(){ 
        return(   
            <div className="counter">
                <button className="minus" onClick={this.props.handleMinus}>-</button> 
                <input type="text" value={this.props.order}/> 
                <button className="plus"  onClick={this.props.handlePlus}>+</button>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);