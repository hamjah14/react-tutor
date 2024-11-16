
import { Create, Get, Update, Delete, GetById } from './crud'
 
const createPost = (data) => Create('v1/blog/post', data) ;
const getPost = (currentPage, limit) => Get('v1/blog/post', `?page=${currentPage}&limit=${limit}`);
const updatePost = (id, data) => Update('v1/blog/post', id, data);
const deletePost = (id) => Delete('v1/blog/post', id);
const getPostById = (id) => GetById('v1/blog/post', id);

export { createPost, getPost, updatePost, deletePost, getPostById } 