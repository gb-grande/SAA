import express from "express";
import {makeLogin} from "../controllers/adminLogin.js";

const router = express.Router();

router.post('/', makeLogin);

export default router;