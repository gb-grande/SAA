import express from "express";
import {getImage, setImage} from "../controllers/sectionImages.js";

const router = express.Router();

router.get('/:id', getImage);
router.put('/:id', setImage);

export default router;