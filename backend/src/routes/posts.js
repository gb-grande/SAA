import express from "express";
import {createPost, updatePost} from "../controllers/posts.js";

const router = express.Router();

router.post('/', createPost);
router.put('/:id', updatePost);

export default router;