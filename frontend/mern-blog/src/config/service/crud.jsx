import axios from "axios"; 
const DEV_API = "http://localhost:4000";

const Create = (path, data) => { 
    const url = `${DEV_API}/${path}`;
    // console.log("api", data)  
    const promise = new Promise((resolve, reject) => { 
        axios.post(url, data)
        .then((res) => {
            resolve(res)
        })
        .catch((err) => { 
            reject(err)
        })
    })

    return promise;
}

const Get = (path, query) => {
    const promise = new Promise((resolve, reject) => {
        const url = `${DEV_API}/${path}${query}`;

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
 
const GetById = (path, id) => {
    const promise = new Promise((resolve, reject) => {
        const url = `${DEV_API}/${path}/${id}`;

        axios.get(url)
        .then((res) => {  
            resolve(res.data)
        }, (err) => {
            reject(err)
        }) 
    })

    return promise;
}
 
export { Create, Get, Update, Delete, GetById };