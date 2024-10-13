// libraries
import React, {Component} from "react";
import { connect } from "react-redux";

// style
import "./LifeCycleComponent.css"
 
class LifeCycleComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 1
        }

        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps"); 
        return null
    }

    componentDidMount(){
        // console.log("componentDidMount"); 

        setTimeout(()=>{
            this.setState({
                count:2
            })
        }, 3000) 
    }
 
    shouldComponentUpdate(nextProps, newState){
        console.group("shouldComponentUpdate"); 
        console.log("newState", newState);
        console.log("state", this.state);
        console.groupEnd();

        if(newState.count >= 4){
            return false
        }  
            
        return true 
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate");  
        return null
    }
 
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate"); 
    }

    componentWillUnmount(){ 
        console.log("componentWillUnmount");
    }

    changeCount = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        console.log("render");

        return(
            <div>
                <p>Life Cycle</p>
                <hr></hr>
                
                <button className="btn" onClick={this.changeCount}> Component Button {this.state.count}</button>
                <br />

                
                <p>Total Order</p>
                <hr></hr>
                {this.props.order}
            </div>
        )
    }
}

const globalStore = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(globalStore) (LifeCycleComponent);