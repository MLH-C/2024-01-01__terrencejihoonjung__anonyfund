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

router.post("/campaigns", createCampaign);
router.get("/campaigns", getCampaigns);
router.get("/campaigns/:id/donations", getDonations);
router.get("/campaigns/:id", getCampaign);
router.put("/campaigns/:id", updateCampaign);
router.delete("/campaigns/:id", deleteCampaign);

export default router;
