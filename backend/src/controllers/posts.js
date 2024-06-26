import Post from "../models/Post.js";
import mongoose from "mongoose";
import {deleteImage} from "../middleware/minio.js";

/**
 * Creates a new post in the database.
 * 
 * @param {object} req - The request object, containing the post in body.
 * @param {object} res - The response object, used to send back the status and post ID.
 */
export async function createPost(req, res) {
    try {
        const blog = new Post(req.body);
        const saved = await blog.save();
        return res.status(201).send({id: saved._id});
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError){
            const errors = Object.values(e.errors).map(e => ({[e.path]: e.message}));
            return res.status(400).send({validationErrors: Object.assign({}, ...errors)});
        }
        console.error('Unhandled error in post creation.', e);
        return res.status(500).send({message: 'Error ao criar post.'});
    }
}

/**
 * Retrieves a list of posts from the database.
 * 
 * @param {object} req - The request object, type is defined by query (blog or bazar).
 * @param {object} res - The response object, used to send back status and list of posts.
 */
export async function getPosts(req, res) {
    try {
        const { type } = req.query;
        const filter = type === 'blog' ? { isBlog: true } : type === 'bazar' ? { isBlog: false } : {};
        const posts = await Post.find(filter, null, {sort: {date: -1}});
        return res.status(200).send(posts);
    } catch (e) {
        return res.status(400).send({ error: e.message });
    }
}

/**
 * Retrieves a specific post from the database based on the provided ID.
 * 
 * @param {object} req - The request object, containing the post ID as parameter.
 * @param {object} res - The response object, used to send back the status and post.
 */
export async function getPost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        return (post) 
            ? res.status(200).send(post)
            : res.status(404).send({message: 'Post não existente'});
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e: e.message });
    }
}

/**
 * Updates an existing post in the database based on the provided ID.
 * 
 * @param {object} req - The request object, containing the post ID as parameter and post details in body.
 * @param {object} res - The response object, used to send back the status and updated post.
 */
export async function updatePost(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({message: 'ID do post é inválido.'});
        }

        const post = await Post.findById(id);
        if (!post){
            return res.status(404).send({message: 'Post não foi encontrado.'});
        }

        //Delete old image
        if (updates.imageUrl && post.imageUrl && updates.imageUrl !== post.imageUrl){
            await deleteImage(post.imageUrl);
        }
        await Post.findByIdAndUpdate(id, updates, {new: true, runValidators: true});
        return res.status(200).send({id});
    } catch (e) {
        if (e instanceof moongose.Error.ValidationError) {
            const errors = Object.values(e.errors).map(e => ({[e.path]: e.message}));
            return res.status(400).send({validationErrors: Object.assign({}, ...errors)});
        }
        console.error('Unhandled error in post update.', e);
        return res.status(500).send({message: 'Erro ao atualizar post.'});
    }
}

/**
 * Deletes a post from the database based on the provided ID.
 * 
 * @param {object} req - The request object, containing the post ID as parameter.
 * @param {object} res - The response object, used to send back status and message.
 */
export async function deletePost(req, res) {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            console.log("id não encontrado");
            return res.status(400).send({message: 'ID do post é inválido.'});
        }

        const post = await Post.findById(id);
        if (post == null) {
            return res.status(404).send({message: 'Post não foi encontrado.'});
        }

        //Deletar a imagem
        if (post.imageUrl){
            await deleteImage(post.imageUrl);
        }
        await post.deleteOne();
        return res.status(200).send({message: 'O Post foi deletado'});

    } catch (e) {
        if (e instanceof moongose.Error.ValidationError) {
            const errors = Object.values(e.errors).map(e => ({[e.path]: e.message}));
            return res.status(400).send({validationErrors: Object.assign({}, ...errors)});
        }
        console.error('Unhandled error in post deletion.', e);
        return res.status(500).send({message: 'Erro ao deletar o post.'});
    }
}