import mongoose from "mongoose";
import sanitizeHtml from "sanitize-html"
import {deleteImage} from "../middleware/minio.js";

/**
 * A MongoDB schema for representing blog/bazaar posts.
 * Includes: flag isBlog -> true: is blog | false: is bazaar item,
 * poster username, post date, title, image url, content.
 */
const schema = new mongoose.Schema({
    isBlog: {
        type: Boolean,
        required: true
    },
    posterUsername: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: function() {return new Date();}
    },
    title: {
        type: String,
        required: true
    },
    imageUrl: String,
    content: {
        type: String,
        required: true,
        set: function(newContent){
            // TODO verify if the default set of allowed tags is safe enough
            return sanitizeHtml(newContent);
        }
    }
});

const Post = new mongoose.model("Post", schema);
export default Post;