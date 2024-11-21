const express = require("express");
const router = express.Router();
const UserController = require("../constroller/userController"); 
// app.method(path, handler);

router.post("/", UserController.createUser);
router.get("/", UserController.getUser);
router.patch("/:userId", UserController.putUser);
router.delete("/:userId", UserController.deleteUser);
router.post("/:userId", UserController.getUserById);

module.exports = router