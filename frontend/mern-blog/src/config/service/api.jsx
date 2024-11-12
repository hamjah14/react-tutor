
import { Create, Get, Update, Delete, GetById } from './crud'
 
const createPost = (data) => Create('v1/blog/post', data);
const getPost = (query) => Get('v1/blog/post', query);
const updatePost = (data, id) => Update('v1/blog/post', id, data);
const deletePost = (id) => Delete('v1/blog/post', id);
const getPostById = (id) => GetById('v1/blog/post', id);

export { createPost, getPost, updatePost, deletePost, getPostById } 