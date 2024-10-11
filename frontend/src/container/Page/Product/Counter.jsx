import React, {Component} from "react"; 
 
// context
import { GlobalConsumer } from "../../../context/GlobalContext";

// style
import './Product.css'; 
import ActionType from '../../../redux/reducer/globalActionType'; 

class Counter extends Component{   
    render(){  
        return(   
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatchContext({type: ActionType.MINUS_ORDER})}>-</button> 
                <input type="text" value={this.props.state.totalOrder}/> 
                <button className="plus" onClick={() => this.props.dispatchContext({type: ActionType.PLUS_ORDER})}>+</button>
            </div>   
        )
    }
}
  
export default GlobalConsumer(Counter);