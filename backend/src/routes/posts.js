import express from "express";
import {createPost, getPosts, getPost, updatePost} from "../controllers/posts.js";

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', updatePost);

export default router;