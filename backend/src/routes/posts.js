import express from "express";
import {createPost, updatePost, deletePost} from "../controllers/posts.js";

const router = express.Router();

router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;