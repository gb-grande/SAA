import express from "express";
import {editPassword, getAdmins, registerAdmin} from "../controllers/admins.js";

const router = express.Router();

router.get('/', getAdmins);
router.put('/', editPassword);
router.post('/', registerAdmin);

export default router;