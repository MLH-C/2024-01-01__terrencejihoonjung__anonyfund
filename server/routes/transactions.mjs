import express from "express";
import {
  sendDonation,
  getTransactionHistory,
} from "../controllers/transactionController.mjs";
const router = express.Router();

router.post("/", sendDonation);
router.get("/:campaignId", getTransactionHistory);

export default router;
