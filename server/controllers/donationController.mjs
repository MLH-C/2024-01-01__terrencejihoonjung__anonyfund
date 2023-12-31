import { db } from "../firebase-admin.mjs";

// POST /api/donations
export const getDonations = async (req, res) => {
  const { campaignId, amount, message, donorWalletAddress } = req.body;

  // Validate data here (ensure required fields are present and valid)

  const newDonationRef = db.ref("donations").push();
  const donationId = newDonationRef.key;

  const newDonation = {
    id: donationId,
    campaignId,
    amount,
    message,
    donorWalletAddress,
    createdAt: Date.now(),
  };

  await newDonationRef.set(newDonation);

  // Optionally, update the campaign's raised amount here

  res.status(201).json(newDonation);
};

// GET /api/donations/:id
export const getDonation = async (req, res) => {
  const donationId = req.params.id;
  const donationRef = db.ref(`donations/${donationId}`);
  const snapshot = await donationRef.once("value");
  const donation = snapshot.val();

  if (!donation) {
    return res.status(404).send("Donation not found");
  }

  res.json(donation);
};
