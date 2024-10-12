import { Post, Get, Put, Delete } from "./Crud";
import { OnlinePath } from './Config'; 

// Post API
const getBlogPost = (id) => Get('posts?_sort=id&_order=desc', null, null);
const postBlogPost = (data) => Post('posts', null, data);
const putBlogPost = (data, id) => Put(`posts/${id}`, null, data);
const deleteBlogPost = (id) => Delete(`posts/${id}`, null);

// Comment API
const getComment = (id) => Get(null, OnlinePath, id);

const API = {
    postBlogPost,
    getBlogPost,
    putBlogPost,
    deleteBlogPost,
    getComment,
}

export default API;