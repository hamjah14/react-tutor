const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PostModel = new schema({
    // _id: String,
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
    author_id: {
        type: String,
        required: true
    },
    author_name: {
        type: String,
        required: true
    },
},{
    timestamps:true
});

module.exports = mongoose.model("PostModel", PostModel);