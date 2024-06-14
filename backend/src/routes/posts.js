import express from "express";
import {createPost, getPosts, getPost, updatePost, deletePost} from "../controllers/posts.js";
import {uploadImageMiddleware} from "../middleware/minio.js";

const router = express.Router();
router.post('/',  uploadImageMiddleware, createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', uploadImageMiddleware, updatePost);
router.delete('/:id', deletePost);

export default router;