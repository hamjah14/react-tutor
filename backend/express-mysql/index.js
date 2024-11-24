require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors"); 
  
const upload = require('./src/config/multer');
const userRoute = require("./src/route/userRoute")

app.use(cors()); 
app.use(express.json());
app.use("/v1/user", userRoute);
  
app.use("/images/post", express.static("public/images/post/"));
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(201).json({
        "message": "Upload berhasil"
    })
});

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