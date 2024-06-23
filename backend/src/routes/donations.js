import express from "express";
import {getDonation, getDonations, registerDonation, deleteDonation, getReport} from "../controllers/donations.js"

const router = express.Router();

router.get("/", getDonations);
router.get("/report", getReport);
router.get("/:id", getDonation);
router.post("/", registerDonation);

router.delete("/:id", deleteDonation)

export default router;