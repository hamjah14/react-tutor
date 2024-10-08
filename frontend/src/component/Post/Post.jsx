import React from "react";

const Post = (props) => {
    return ( 
        <div className="post">
            <div className="img-thumb">
                <img  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqTEoJUOlTg4HakvM3SHU0a7a3gFpAQ1HrBL21fBAr1OYOeocP" alt="-" />
            </div>
            <div className="content">
                <div className="title">{props.data.title}</div>
                <div className="desc">{props.data.body}</div>
            </div>
            <div className="action">
                <button className="addButt">Add</button>
                <button className="removeButt" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;