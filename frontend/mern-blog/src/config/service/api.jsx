import { Create, Get, Update, Delete } from './crud'
 
const createPostAPI = (data) => Create('v1/blog/post', data);
const getPostAPI = (paging) => Get(`v1/blog/post${paging}`);
const updatePostAPI = (data, id) => Update(`v1/blog/post/${id}`, data);
const deletePostAPI = (id) => Delete(`v1/blog/post/${id}`);

export { createPostAPI, getPostAPI, updatePostAPI, deletePostAPI }