// libraries
import axios, { AxiosResponse } from 'axios'

const RootPath = 'http://localhost:3000';
const OnlinePath = 'https://jsonplaceholder.typicode.com/comments';

const Get = (path, online, id) => { 
    let url = online ? online : `${RootPath}/${path}`;
    url = id ? `${url}/${id}` : `${url}`
 
    const promise = new Promise((resolve, reject) => {
        axios.get(url)
        .then((res) => {  
            resolve(res.data); 
        }, (err) => { 
            reject(err);
        })
    })

    return promise
}

const getBlogPost = (data) => Get('posts?_sort=id&_order=desc', null, null);
const getComment = (data) => Get(null, OnlinePath, data);

const API = {
    getBlogPost,
    getComment,
}

export default API;