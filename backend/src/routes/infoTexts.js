import express from "express";
import {getInfoText, setInfoText} from "../controllers/infoTexts.js";

const router = express.Router();

router.get('/:id', getInfoText);
router.put('/:id', setInfoText);

export default router;