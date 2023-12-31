import express from "express";
import { connectWallet } from "../controllers/walletController.mjs";
const router = express.Router();

router.post("/", connectWallet);

export default router;
