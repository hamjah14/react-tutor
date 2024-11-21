const express = require("express");
const router = express.Router();
const UserController = require("../constroller/userController"); 
// app.method(path, handler);

router.get("/", UserController.getUser);
router.post("/", UserController.createUser);

module.exports = router