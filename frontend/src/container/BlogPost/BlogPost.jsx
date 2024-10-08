import React, {Component, Fragment} from "react";
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';


class BlogPost extends Component {
    state = {
        post:[],
        formBlogPost:{
            id:1,
            title:'',
            body:'',
            userId:1,
        } 
    }
 
    getPostApi = () => { 
        axios.get('http://localhost:3000/posts?_sort=id&_order=desc')
        .then((res) => {  
            this.setState({
                post:res.data
            })
        })
    }

    handleSaveDataToApi = (data) => {
        axios.post(`http://localhost:3000/posts/`, data)
        .then((res) => { 
            this.getPostApi()
        }, (err) => {
            console.log(err)
        }) 
    }

    handleRevomeDataToApi = (iddata) => { 
        axios.delete(`http://localhost:3000/posts/${iddata}`)
        .then((res) => {  
            console.log(res)
            this.getPostApi()
        })
    }
 
    handleFormChange = (event) =>{
        let formBlogPostNew = {...this.state.formBlogPost};
        let iddata = new Date().getTime();
        
        formBlogPostNew['id'] = iddata;
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        }, ()=> {
            // console.log(this.state.formBlogPost)
        })
    }

    handleSubmit = (event) => {  
        this.handleSaveDataToApi(this.state.formBlogPost)
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post:json
        //         })
        //     })

        this.getPostApi()
    }

    render(){
        return(
            <Fragment>
                <div className="form-add-post"> 
                    {/* <form onSubmit={this.handleSubmit}> */} 
                        <div>
                            <label htmlFor="title">Title</label> 
                            <div>
                                <input type="text" name="title" placeholder="Add Title" onChange={this.handleFormChange} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="body">Blog Content</label> 
                            <div>
                                <textarea name="body" id="" cols="15" row="10" placeholder="Add Blog Content" onChange={this.handleFormChange}></textarea>
                            </div>
                        </div>
                        <div>
                            <button  className="btn-submit" onClick={this.handleSubmit} >Simpan</button>
                        </div>
                    {/* </form> */}
                </div>
                <br />

                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRevomeDataToApi} />
                    })
                }
                
            </Fragment>
        )
    }
}

export default BlogPost;