import express from "express";
import {authenticateToken} from "../controllers/auth.js";

const router = express.Router();

router.get('/', authenticateToken);

export default router;