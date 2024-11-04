// libraries
import React, {Component} from "react"; 

// style
import './style.css';
import { text } from "@fortawesome/fontawesome-svg-core";

class Async extends Component {
    state = {
        text: 'text disini', 
    }

    callBackFirstName = (callback) => {
        setTimeout(() => {
            callback("Hasan") 
        }, 3000)
    }

    promiseFirstName = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve("Hasan") 
            }, 3000)
        })
    }

    promiseLastName = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve("Nurawi") 
            }, 3000)
        })
    }
    
    login = () => {
        // Callback
        // this.callBackFirstName((res) => {
        //     const first = res;
        //     const last = "Nurawi"
        //     const name = first + ' ' + last
    
        //     this.setState({text: name}) 
        // })

        // Promise
        // this.promiseFirstName().then( result => {
        //     const first = result;
        //     const last = "Nurawi"
        //     const name = first + ' ' + last
    
        //     this.setState({text: name})  
        // })

        Promise.all([this.promiseFirstName(), this.promiseLastName()]).then(
            ([result1, result2]) => {
                this.setState({
                    text : result1 + ' ' + result2
                })
            }
        )
    }

    login2 = async() => {
        const first = await this.promiseFirstName()
        const last = await this.promiseFirstName()
        const name = first + ' ' + last

        this.setState({text : name})
    }

    render(){
        return(
            <div className="App">
                <button onClick={this.login2}>Login</button>
                <div />
                <h2> {this.state.text} </h2>
            </div>
        )
    }
}

export default Async