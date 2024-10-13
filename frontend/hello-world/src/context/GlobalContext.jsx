import React, { Component, createContext } from "react";

import ActionType from "../redux/reducer/globalActionType";

export const RootContext = createContext();
const Provider = RootContext.Provider;

const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            state = { 
                totalOrder: 0
            }

            dispatchContext = (action) => {
                switch(action.type){
                    case ActionType.PLUS_ORDER:
                        return this.setState({
                            totalOrder: this.state.totalOrder + 1
                        })
                    case ActionType.MINUS_ORDER:  
                        if(this.state.totalOrder > 0 ){
                            return this.setState({
                                totalOrder: this.state.totalOrder - 1
                            })
                        } else {
                            return 0
                        }
                
                    default:
                    return this.state;
                } 
            }
            
            render() {
                return ( 
                    <Provider value={{
                        state: this.state,
                        dispatchContext: this.dispatchContext
                    }}>
                        <Children {...this.props} />
                    </Provider>
                )
            } 
        }
    )
}

const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        
        class ParentConsumer extends Component {
            render(){
                return ( 
                    <Consumer>
                        {
                            value => {
                                return ( 
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}

export default GlobalProvider;