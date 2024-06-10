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
    imageUrl: {
        type: String,
        set: function(newUrl){
            const oldUrl = this.imageUrl;
            if (oldUrl) {
                deleteImage(oldUrl)
                    .then(_ => console.log(`Deleted old image at ${oldUrl}.`))
                    .catch(e => console.error(`Error when deleting old image at ${oldUrl}.`, e));
            }
            return newUrl;
        }
    },
    content: {
        type: String,
        required: true,
        set: function(newContent){
            console.log("Will sanitize "+newContent);
            //TODO verify if the default set of allowed tags is safe enough
            return sanitizeHtml(newContent);
        }
    }
});

const Post = new mongoose.model("Post", schema);
export default Post;