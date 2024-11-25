const dbPool = require("../config/database");

const createPost = (body) => {
    const sqlQuery = `INSERT INTO tx_post 
                        (title_post, body_post, thumb_image, author_id, author_name) 
                      VALUES
                       ("${body.title_post}", "${body.body_post}", "${body.thumb_image}", "${body.author_id}", "${body.author_name}")`;
    
    return dbPool.execute(sqlQuery);
}

const getPosts = (page, limit) => {
    page = (page - 1) * limit;
    const sqlQuery = `SELECT * FROM tx_post a LIMIT ${limit} OFFSET ${page} `;
    return dbPool.execute(sqlQuery);
}

const updatePost = (id, body) => { 
    const sqlQuery = ` UPDATE tx_post 
                       SET title_post = "${body.title_post}", 
                           body_post = "${body.body_post}", 
                           thumb_image = "${body.thumb_image}",
                           author_id = "${body.author_id}",
                           author_name = "${body.author_name}" 
                       WHERE id = ${id}`;

    return dbPool.execute(sqlQuery);
}

const deletePost = (id) => {
    const sqlQuery = `DELETE FROM tx_post WHERE id = ${id}`;
    return dbPool.execute(sqlQuery);
}

const getPostById = (id) => { 
    const sqlQuery = `SELECT * FROM tx_post a WHERE a.id = ${id}`;
    return dbPool.execute(sqlQuery);
}

const getTotalPost = () => { 
    const sqlQuery = `SELECT COUNT(*) AS total FROM tx_post `;
    return dbPool.execute(sqlQuery);
}

module.exports = { createPost, getPosts, updatePost, deletePost, getPostById, getTotalPost }