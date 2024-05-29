import Post from "../models/Post.js";
import mongoose from "mongoose";

export async function createPost(req, res) {
    try {
        //TODO upload image
        const blog = new Post({
            posterUsername: req.body.posterUsername,
            date: req.body.date ?? Date.now(),
            title: req.body.title,
            imageId: req.body.imageId,
            content: req.body.content
        });
        const saved = await blog.save();
        return res.status(201).send({id: saved._id});
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError){
            const errors = Object.values(e.errors).map(e => {
                return {path: e.path, type: e.kind}
            });
            return res.status(400).send(errors);
        }
        console.log('Unhandled error in blog creation.', e);
        return res.status(500).send('Error during blog creation.');
    }
}