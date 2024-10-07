import React, {Component, Fragment} from "react";
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';


class BlogPost extends Component {
    state = {
        post:[]
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post:json
        //         })
        //     })

        axios.get('http://localhost:3000/posts')
        . then((res) => { 
            this.setState({
                post:res.data
            })
        })
    }

    render(){
        return(
            <Fragment>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body}/>
                    })
                }
                
            </Fragment>
        )
    }
}

export default BlogPost;