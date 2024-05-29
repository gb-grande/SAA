import express from "express";
import {getContactInfo, setContactInfo} from "../controllers/contactInfos.js";

const router = express.Router();

router.get('/', getContactInfo);
router.put('/', setContactInfo);

export default router;