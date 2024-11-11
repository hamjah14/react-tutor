import axios from "axios"; 
const DEV_API = "http://localhost:4000";

const Create = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        const url = `${DEV_API}/${path}}`;

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

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        const url = `${DEV_API}/${path}`;

        axios.get(url)
        .then((res) => { 
            resolve(res.data)
        }, (err) => {
            reject(err)
        }) 
    })

    return promise;
}

const Update = (path, id, data) => {
    const promise = new Promise((resolve, reject) => {
        const url = `${DEV_API}/${path}/${id}`;

        axios.put(url, data)
        .then((res) => {
            resolve(res)
        }, (err) => {
            console.log('err ', err)
            reject(err)
        })
    })

    return promise;
}

const Delete = (path, id) => {
    const promise = new Promise((resolve, reject) => { 
        const url = `${DEV_API}/${path}/${id}`;
        axios.delete(url)
        .then((res) => {
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })

    return promise;
}

export { Create, Get, Update, Delete };