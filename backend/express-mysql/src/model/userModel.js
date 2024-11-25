const dbPool = require("../config/database")
 
const createUser = (body) => {
    const sqlQuery = `  INSERT INTO tx_users 
                            (name, address, email) 
                        VALUES 
                            ('${body.user_name}', '${body.user_address}', '${body.user_email}')`;

    return dbPool.execute(sqlQuery); 
}

const getUsers = () => {
    const sqlQuery = "SELECT * FROM tx_users";
    return dbPool.execute(sqlQuery); 
}

const updateUser = (id, body) => {
    const sqlQuery = ` UPDATE tx_users 
                       SET name = '${body.user_name}', address = '${body.user_address}', email = '${body.user_email}'
                       WHERE id = ${id}`;

    return dbPool.execute(sqlQuery); 
}

const deleteteUser = (id) => {
    const sqlQuery = ` DELETE FROM tx_users WHERE id = ${id}`;

    return dbPool.execute(sqlQuery); 
}

module.exports = { getUsers, createUser, updateUser, deleteteUser } 