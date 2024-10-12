// libraries
import axios from 'axios'

import { RootPath } from './Config'; 

const Get = (path, online, data) => { 
    let url = online ? online : `${RootPath}/${path}`;
    url = data ? `${url}/${data}` : `${url}`
 
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

const Post = (path, online, data) => {
    let url = online ? online : `${RootPath}/${path}`;

    const promise = new Promise((resolve, reject) => {
        axios.post(url, data)
        .then((res) => { 
            resolve(res) 
        }, (err) => {
            reject(err)
        })  
    })

    return promise;
}

export { Get, Post }