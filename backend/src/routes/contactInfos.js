import express from "express";
import {getContactInfo, setContactInfo} from "../controllers/contactInfos.js";

const router = express.Router();

router.get('/', getContactInfo);
router.post('/', setContactInfo);

export default router;