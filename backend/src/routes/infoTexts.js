import express from "express";
import {getInfoText, setInfoText} from "../controllers/infoTexts.js";

const router = express.Router();

router.get('/:id', getInfoText);
router.post('/:id', setInfoText);

export default router;