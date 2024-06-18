import express from "express";
import {getDonation, getDonations, registerDonation, deleteDonation} from "../controllers/donation.js"

const router = express.Router();

router.get("/", getDonations);
router.get("/:id", getDonation);

router.post("/", registerDonation);

router.delete("/:id", deleteDonation)

export default router;