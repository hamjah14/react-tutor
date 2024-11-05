// libraries
import React, { Component, Fragment } from "react";

// API
import API from "../../../service/api";

// Component
import Post from '../../../component/Post/Post';

// style
import './BlogPost.css';

class BlogPost extends Component {
    state = {
        post: [],
        komen: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
        },
        isUpdate: 'Simpan'
    }

    // API untuk komponen post
    getPostApi = () => {
        API.getBlogPost().then(
            result => {
                this.setState({
                    post: result
                })
            }
        )
    }

    handleSavePostToApi = (data) => {
        API.postBlogPost(data).then(
            this.handleFormChangeClear(),
            this.getPostApi()

        )
    }

    handleEditDataFromApi = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: 'Update'
        }, () => {
            // console.log(this.state.formBlogPost)
        })
    }

    handleUpdatePostToApi = (data) => {
        API.putBlogPost(data, data.id).then(

            this.handleFormChangeClear(),
            this.getPostApi()

        )
    }

    handleRevomePostToApi = (iddata) => {
        API.deleteBlogPost(iddata).then(

            this.getPostApi()

        )
    }

    handleFormChange = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        // let iddata = new Date().getTime();

        // formBlogPostNew['id'] = iddata;
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log(this.state.formBlogPost)
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate === 'Simpan') {
            let formBlogPostNew = { ...this.state.formBlogPost };
            let iddata = new Date().getTime();
            formBlogPostNew['id'] = iddata;

            this.setState({
                formBlogPost: formBlogPostNew
            }, () => {
                this.handleSavePostToApi(this.state.formBlogPost)
            })
        } else {
            this.handleUpdatePostToApi(this.state.formBlogPost)
        }
    }

    handleFormChangeClear = () => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        formBlogPostNew['id'] = '';
        formBlogPostNew['userId'] = '';
        formBlogPostNew['title'] = '';
        formBlogPostNew['body'] = '';

        this.setState({
            formBlogPost: formBlogPostNew,
            isUpdate: 'Simpan'
        }, () => { })
    }

    // API untuk konponen komen 
    // getKomenById = (id) => {  
    //     API.getComment(id).then( 
    //         result => { 
    //             this.setState({
    //                 komen: result
    //             })
    //         }
    //     ) 
    // }

    componentDidMount() {
        this.getPostApi()
    }

    render() {
        return (
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
                            <textarea name="body" id="" cols="15" rows="10" placeholder="Add Blog Content" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>
                        </div>
                    </div>
                    <div>
                        <button className="btn-submit" onClick={this.handleSubmit} >{this.state.isUpdate}</button>
                    </div>
                    {/* </form> */}
                </div>
                <br />

                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} edit={this.handleEditDataFromApi} remove={this.handleRevomePostToApi} />
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;