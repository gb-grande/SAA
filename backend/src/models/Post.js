import mongoose from "mongoose";
import sanitizeHtml from "sanitize-html"

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
        required: true,
    }
});

schema.pre('save', {}, async function(){
    //TODO verify if the default set of allowed tags is safe enough
    this.content = sanitizeHtml(this.content);
});

const Post = new mongoose.model("Post", schema);
export default Post;