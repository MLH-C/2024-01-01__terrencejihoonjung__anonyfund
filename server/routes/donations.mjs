import express from "express";
import {
  createDonation,
  getDonation,
} from "../controllers/donationController.mjs";
const router = express.Router();

router.post("/donations", createDonation);
router.get("/donations/:id", getDonation);

export default router;
