const dbPool = require("../config/database")
 
const getUsers = () => {
    const sqlQuery = "SELECT * FROM users";
    return dbPool.execute(sqlQuery); 
}

module.exports = { getUsers }

// dbPool.execute("SELECT * FROM users", (err, rows) => {
//     if(err){
//         res.json({
//             "message": "connection failed"
//         })
//     }

//     res.json({
//             "message": "connection success",
//             "data": rows,
//     }) 
// })