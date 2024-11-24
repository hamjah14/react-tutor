require("dotenv").config();
const express = require("express");
const app = express();

// routes
const userRoute = require("./src/route/userRoute")

app.use(express.json());
app.use("/images", express.static('public/images/post'));
app.use("/v1/user", userRoute);
 
app.listen(process.env.PORT, () => {
    console.log("Server berhasil dijalankan pada port ", process.env.PORT);
})