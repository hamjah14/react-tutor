import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import './DetailPost.css'

const DetailPost = () => {
    const [post, setPost] = useState({})
    let postId = useParams();

    useEffect(() => {
        if (postId.id !== undefined) {
            axios.get(`http://localhost:3000/posts/${postId.id}`)
                .then((res) => {
                    setPost(res.data)
                }, (err) => {
                    console.log(err)
                })
        }

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