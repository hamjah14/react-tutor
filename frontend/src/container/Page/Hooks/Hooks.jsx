// libraries
import react, { Component, useEffect, useState } from "react";
 
// style
import './Hooks.css';

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     componentDidMount(){
//         document.title = `Nilai saya ${this.state.count}`
//     }

//     componentDidUpdate(){
//         document.title = `Nilai saya ${this.state.count}`
//     }

//     componentWillUnmount(){
//         document.title = 'React App'
//     }

//     render(){
//         return(
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini adalah : {this.state.count}</p>
//                 <button onClick={() => this.onUpdate()} >Update Nilai</button>
//             </div>
//         )
//     }
// }
 
const Hooks = () => {
    const [count, setCount] = useState(0)
     
    useEffect(() => {
        document.title = `Nilai saya ${count}`;

        return () => {
            document.title = 'React App' 
        }
    })

    return (
        <div className="p-hooks">
            <p>Nilai saya saat ini adalah : {count}</p>
            <button onClick={() => setCount( count + 1 )} >Update Nilai</button>
        </div>
    )
}

export default Hooks;