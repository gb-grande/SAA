import express from "express";
import {editPassword, getAdmins, registerAdmin, deleteAdmin} from "../controllers/admins.js";

const router = express.Router();

router.get('/', getAdmins);
router.put('/', editPassword);
router.delete('/:user', deleteAdmin)
router.post('/', registerAdmin);

export default router;