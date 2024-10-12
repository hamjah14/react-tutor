// libraries
import React, { useEffect, useState } from "react";
import axios from "axios";

// API
import API from "../../service/api";

const Comment = (props) => { 
    const [komen, setKomen] = useState({}) 

    // API untuk konponen komen 
    const getKomenById = (id) => {  
        // API.getComment(id).then( 
        //     result => {  
        //         setKomen(result) 
        //         // console.log('result ', result)
        //     }
        // )
         
        if(id !== undefined){  
            axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then((res) => { 
                // console.log(res.data)
                setKomen(res.data)
            }, (err) => {
                console.log(err)
            })   
        }  
    }
      
    useEffect(() => {  
        if(props.iddata !== undefined || props.iddata !== null){  
            getKomenById(props.iddata)  
        }  

    }, []);

    return ( 
        <div>
            <p> {komen.body}</p>  
        </div>
    )
}

export default Comment;