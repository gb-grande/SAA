import Post from "../models/Post.js";
import mongoose from "mongoose";

export async function createPost(req, res) {
    try {
        //TODO upload image
        const blog = new Post({
            isPost: req.body.isPost,
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
            const errors = Object.values(e.errors).map(e => ({[e.path]: e.message}));
            return res.status(400).send({validationErrors: Object.assign({}, ...errors)});
        }
        console.error('Unhandled error in post creation.', e);
        return res.status(500).send({message: 'Error ao criar post.'});
    }
}

export async function getPosts(req, res) {
    try {
        const { type } = req.query;
        const filter = type === 'blog' ? { isPost: true } : type === 'bazar' ? { isPost: false } : {};
        const posts = await Post.find(filter, null, {sort: {date: -1}});
        return res.status(200).send(posts);
    } catch (e){
        return res.status(400).send({ error: e.message });
    }
}

export async function getPost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        return (post) 
            ? res.status(200).send(post)
            : res.status(404).send({message: 'Post não existente'});
    } catch (e){
        console.log(e);
        return res.status(400).json({ e: e.message });
    }
}

export async function updatePost(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({message: 'ID do post é inválido.'});
        }

        const post = await Post.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

        if (!post) {
            return res.status(404).send({message: 'Post não foi encontrado.'});
        }
        return res.status(200).send(post);

    } catch (e) {
        if (e instanceof moongose.Error.ValidationError) {
            const errors = Object.values(e.errors).map(e => ({[e.path]: e.message}));
            return res.status(400).send({validationErrors: Object.assign({}, ...errors)});
        }
        console.error('Unhandled error in post update.', e);
        return res.status(500).send({message: 'Erro ao atualizar post.'});
    }
}

export async function deletePost(req, res) {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            console.log("id não encontrado");
            return res.status(400).send({message: 'ID do post é inválido.'});
        }

        const result = await Post.findByIdAndDelete(id);

        if (result == null) {
            return res.status(404).send({message: 'Post não foi encontrado.'});
        }
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