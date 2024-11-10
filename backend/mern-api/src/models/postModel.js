const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PostModel = new schema({
    title_post: {
        type: String,
        required: true
    },
    body_post: {
        type: String,
        required: true
    },
    thumb_image: {
        type: String,
        required: true
    }, 
    author: {
        type: Object,
        required: true
    },
},{
    timestamps:true
});

module.exports = mongoose.model("PostModel", PostModel);