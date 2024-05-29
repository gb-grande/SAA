import mongoose from "mongoose";

const schema = new mongoose.Schema({
    posterUsername: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    imageId: mongoose.Types.ObjectId,
    content: {
        type: String,
        required: true
    }
})

const Post = new mongoose.model("Post", schema);
export default Post;