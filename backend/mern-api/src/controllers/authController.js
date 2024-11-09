const { validationResult } = require("express-validator")

const register = (req, res, next) => { 
    const{name,email} = req.body 
    const errors = validationResult(req)
 
    if(!errors.isEmpty()){  
        const err = new Error("Invalid value")
        err.status =  400 
        err.data = errors.array()

        throw err
    } else { 
        const result = {
            "code":"201",
            "message":"Successfully register access",
            "data": {
                        "code":"200",
                        "message":"Successfully registered access",
                        "data":{
                            "name": name,
                            "email": email,
                        }
                    }
            }
        
        res.status(201).json(result)
    } 
 
    next() 
}

const login = (req, res, next) => {
    console.log("request", req.body)

    res.json(
            { 
                status: 200, 
                message: "Successfully added data",  
            } 
        )

    next()
}
const logout = (req, res, next) => {
    console.log("request", req.body)

    res.json(
            { 
                status: 200, 
                message: "Successfully added data",  
            } 
        )

    next()
}

module.exports = { register, login, logout }