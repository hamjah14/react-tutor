// libraries
import axios from 'axios'

import { RootPath } from './Config';

const Post = (path, online, data) => {
    let url = online ? online : `${RootPath}/${path}`;

    const promise = new Promise((resolve, reject) => {
        axios.post(url, data)
            .then((res) => {
                resolve(res)
            }, (err) => {
                console.log('err ', err)
                reject(err)
            })
    })

    return promise;
}

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

const Put = (path, online, data) => {
    let url = online ? online : `${RootPath}/${path}`;

    const promise = new Promise((resolve, reject) => {
        axios.put(`${url}`, data)
            .then((res) => {
                resolve(res)
            }, (err) => {
                reject(err)
            })

    })

    return promise;
}

const Delete = (path, online) => {
    let url = online ? online : `${RootPath}/${path}`;

    const promise = new Promise((resolve, reject) => {
        axios.delete(`${url}`)
            .then((res) => {
                resolve(res)
            }, (err) => {
                reject(err)
            })
    })

    return promise;
}

export { Post, Get, Put, Delete }