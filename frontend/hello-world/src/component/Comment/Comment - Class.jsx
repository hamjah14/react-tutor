// libraries
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

// API
import API from "../../service/api"; 

class Comment extends Component {
    state = { 
        komen:[], 
    }

    // API untuk konponen komen 
    getKomenById = (id) => {  
        API.getComment(id).then( 
            result => { 
                this.setState({
                    komen: result
                })
            }
        ) 
    }

    componentDidMount(){  
        this.getKomenById(this.props.iddata)  
    }
 
    render(){
        return( 
            <div>
                <p> { this.state.komen.body }</p>    
            </div>
        )
    }
}

export default Comment;