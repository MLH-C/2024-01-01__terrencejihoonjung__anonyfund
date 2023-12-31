import express from "express";
import {
  createCampaign,
  getCampaigns,
  getDonations,
  getCampaign,
  updateCampaign,
  deleteCampaign,
} from "../controllers/campaignController.mjs";
const router = express.Router();

router.post("/", createCampaign);
router.get("/", getCampaigns);
router.get("/:id/donations", getDonations);
router.get("/:id", getCampaign);
router.put("/:id", updateCampaign);
router.delete("/:id", deleteCampaign);

export default router;
