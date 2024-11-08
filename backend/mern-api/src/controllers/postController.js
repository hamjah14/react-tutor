const createPost = (req, res, next) => {
    console.log('request', req.body)

    res.json(
            { 
                status: 200, 
                message: 'Successfully added data',  
            } 
        )

    next()
}

const getPost = (req, res, next) => {
    res.json(
            { 
                status: 200, 
                message: 'Successfully get data', 
                data : { 
                    "title_post": "Harry potter book 1",
                    "author_post": "JK Rowling",
                    "date_post": "JK Rowling",
                    "body_post": "Once upon a time bla bla bla bla",
                }
            } 
        )

    next()
}

const updatePost = (req, res, next) => {
    res.json(
            { 
                status: 200, 
                message: 'Successfully updated data',  
            } 
        )

    next()
}
 
const deletePost = (req, res, next) => {
    res.json(
            { 
                status: 200, 
                message: 'Successfully deleted data',  
            } 
        )

    next()
}

module.exports = { createPost, getPost, updatePost, deletePost }