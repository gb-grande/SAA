import mongoose from "mongoose";
import sanitizeHtml from "sanitize-html"
import {deleteImage} from "../middleware/minio.js";

const schema = new mongoose.Schema({
    posterUsername: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
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
            //TODO verify if the default set of allowed tags is safe enough
            return sanitizeHtml(newContent);
        }
    }
});

schema.pre(['updateOne', 'findByIdAndUpdate', 'findOneAndUpdate'], {}, async function(next){
    //If changes the image, delete the old image from minio.
    try {
        const post = await this.model.findById(this._conditions._id);
        if (post.imageUrl && this.get('imageUrl') !== post.imageUrl){
            await deleteImage(post.imageUrl);
            console.log("Old image deleted.");
        }
    } catch (err){
        console.error("Error when deleting old image.", err);
    } finally {
        next();
    }
});

const Post = new mongoose.model("Post", schema);
export default Post;