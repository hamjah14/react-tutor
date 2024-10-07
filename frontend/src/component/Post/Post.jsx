import React from "react";

const Post = (props) => {
    return ( 
        <div className="post">
            <div className="img-thumb">
                <img  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqTEoJUOlTg4HakvM3SHU0a7a3gFpAQ1HrBL21fBAr1OYOeocP" alt="-" />
            </div>
            <div className="content">
                <div className="title">{props.title}</div>
                <div className="desc">{props.desc}</div>
            </div>
        </div>
    )
}

export default Post;