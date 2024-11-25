require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors"); 
   
const userRoute = require("./src/route/userRoute");
const postRoutes = require("./src/route/postRoute");

app.use(cors()); 
app.use(express.json());
 
app.use("/v1/images/post", express.static("public/images/post/")); 
app.use("/v1/user", userRoute);
app.use("/v1/blog", postRoutes);
  
// error handling yang tidak di-handle fungsi
app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
    const data = error.data

    res.status(status).json({
        "message": message,
        "data": data
    })
});

app.listen(process.env.PORT, () => {
    console.log("Server berhasil dijalankan pada port ", process.env.PORT);
})