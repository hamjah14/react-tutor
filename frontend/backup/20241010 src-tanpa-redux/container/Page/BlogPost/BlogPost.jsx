// libraries
import React, {Component, Fragment} from "react";
import Post from '../../../component/Post/Post';
import axios from 'axios';

// component
import DetailPost from '../BlogPost/DetailPost'

// style
import './BlogPost.css';

class BlogPost extends Component {
    state = {
        post:[],
        formBlogPost:{
            id:1,
            title:'',
            body:'',
            userId:1,
        },
        isUpdate: 'Simpan'
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
            this.handleFormChangeClear()
            this.getPostApi()
        }, (err) => {
            console.log(err)
        }) 
    }

    handleEditDataFromApi = (data) => {   
        this.setState({
            formBlogPost: data,
            isUpdate: 'Update'
        }, ()=> {
            // console.log(this.state.formBlogPost)
        }) 
    }

    handleUpdateDataToApi = (data) => {    
        axios.put(`http://localhost:3000/posts/${data.id}`, data)
        .then((res) => {   
            this.handleFormChangeClear()
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
        }, (err) => {
            console.log(err)
        }) 
    }
 
    handleFormChange = (event) =>{
        let formBlogPostNew = {...this.state.formBlogPost};
        // let iddata = new Date().getTime();
        
        // formBlogPostNew['id'] = iddata;
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        }, ()=> {
            // console.log(this.state.formBlogPost)
        })
    }

    handleSubmit = (event) => {  
        if(this.state.isUpdate === 'Simpan'){
            let formBlogPostNew = {...this.state.formBlogPost};
            let iddata = new Date().getTime(); 
            formBlogPostNew['id'] = iddata;

            this.setState({
                formBlogPost: formBlogPostNew
            }, ()=> {
                this.handleSaveDataToApi(this.state.formBlogPost)
            })
        } else { 
            this.handleUpdateDataToApi(this.state.formBlogPost)
        } 
    }

    handleFormChangeClear = ()=>{ 
        let formBlogPostNew = {...this.state.formBlogPost}; 
        formBlogPostNew['id'] = ''; 
        formBlogPostNew['userId'] = ''; 
        formBlogPostNew['title'] = ''; 
        formBlogPostNew['body'] = '';
 
        this.setState({ 
            formBlogPost:formBlogPostNew, 
            isUpdate:'Simpan' 
        },()=>{}) 
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
                <p>Blog Post</p>
                <hr></hr>
                
                <div className="form-add-post"> 
                    {/* <form onSubmit={this.handleSubmit}> */} 
                        <div>
                            <label htmlFor="title">Title</label> 
                            <div>
                                <input type="text" name="title" placeholder="Add Title" value={this.state.formBlogPost.title} onChange={this.handleFormChange} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="body">Blog Content</label> 
                            <div>
                                <textarea name="body" id="" cols="15" row="10" placeholder="Add Blog Content" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>
                            </div>
                        </div>
                        <div>
                            <button  className="btn-submit" onClick={this.handleSubmit} >{this.state.isUpdate}</button>
                        </div>
                    {/* </form> */}
                </div>
                <br />

                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} edit={this.handleEditDataFromApi} remove={this.handleRevomeDataToApi} />
                    })
                }
                
            </Fragment>
        )
    }
}

export default BlogPost;