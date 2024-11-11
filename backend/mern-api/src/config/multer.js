const multer = require("multer");
const fs = require('fs');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getUTCMonth() + 1;
        let folderName = "./assets/images/" + year + "/" + month;
  
        if (!fs.existsSync(folderName)){
            fs.mkdirSync(folderName, { recursive: true });
        }
         
        folderName = "./assets/images/post";
        
        cb(null, folderName );
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpg" || 
        file.mimetype === "image/jpeg" || 
        file.mimetype === "image/png"){
        cb(null, true)
    } else {
        cb(null, false)
    }
}
 
const maxSize = 2 * 1024 * 1024;
const upload = multer({storage: fileStorage , limits: { fileSize: maxSize }, fileFilter: fileFilter});
 
module.exports = upload;