import React from "react"; 
import { useNavigate } from "react-router-dom"; 

const Post = (props) => {
    const navigate = useNavigate()

    return ( 
        <div className="post">
            <div className="img-thumb">
                <img  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqTEoJUOlTg4HakvM3SHU0a7a3gFpAQ1HrBL21fBAr1OYOeocP" alt="-" />
            </div>
            <div className="content">
                {/* <div className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</div>   */}
                <div className="title" onClick={() => navigate(`/detail-post/${props.data.id}`)}>{props.data.title}</div>  
                <div className="desc">{props.data.body}</div>
            </div>
            <div className="action">
                <button className="editButt" onClick={() => props.edit(props.data)}>Edit</button>
                <button className="removeButt" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;