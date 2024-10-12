import React, { useEffect, useState } from "react";  
import { useParams } from "react-router-dom"; 
import axios from "axios";
 
import './DetailPost.css'
 
const DetailPost = (props) => { 
  const [post, setPost] = useState({}) 
  let  postId  = useParams(); 
   
  useEffect(() => { 
        if(postId.id !== undefined){  
            axios.get(`https://jsonplaceholder.typicode.com/comments/${postId.id}`)
            .then((res) => { 
                setPost(res.data)
            }, (err) => {
                console.log(err)
            })   
        }

        console.log('post 2', post.title)
  }, []);
 
  return ( 
            <div className="p-detail-post">
                <p className="detail-title">{post.title}</p> 
                <hr></hr> 
                <p className="detail-body">{post.body}</p> 
            </div> 
        ) 
}
 
export default DetailPost