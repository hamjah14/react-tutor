const express = require("express");
const app = express();

// routes
const userRoute = require("./src/route/userRoute")
 
app.use(express.json());
app.use("/v1/user", userRoute);
 
app.listen(4001, () => {
    console.log("Server berhasil dijalankan");
})