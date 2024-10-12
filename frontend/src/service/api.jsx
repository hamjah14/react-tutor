import { Get, Post } from "./Crud";
import { OnlinePath } from './Config'; 

// Post API
const getBlogPost = (data) => Get('posts?_sort=id&_order=desc', null, null);
const postBlogPost = (data) => Post('posts', null, data);

// Comment API
const getComment = (data) => Get(null, OnlinePath, data);

const API = {
    getBlogPost,
    postBlogPost,
    getComment,
}

export default API;