import { db } from "../firebase-admin.mjs";
import forge from "node-forge";
import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";

export const connectWallet = async (req, res) => {
  const { blockchainWalletAddress } = req.body;

  try {
    // Check if the Circle wallet already exists for the given blockchain address
    const walletRef = db.ref(`wallets/${blockchainWalletAddress}`);
    const snapshot = await walletRef.once("value");
    let circleWalletAddress = snapshot.val();

    if (!circleWalletAddress) {
      // If not, create a new Circle wallet and store the mapping
      const circleWalletAddress = await createCircleWallet(); // Implement this function
      await walletRef.set(circleWalletAddress);
    }

    res.json({ circleWalletAddress });
  } catch (error) {
    console.error("Error handling wallet request:", error);
    res.status(500).send("Error processing wallet request");
  }
};

// async function encodeSecret() {
//   try {
//     const entitySecret = forge.util.hexToBytes(
//       process.env.CIRCLE_ENTITY_SECRET
//     );
//     const publicKey = forge.pki.publicKeyFromPem(
//       process.env.CIRCLE_ENTITY_PUBLIC_KEY
//     );
//     const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
//       md: forge.md.sha256.create(),
//       mgf1: {
//         md: forge.md.sha256.create(),
//       },
//     });

//     const sec = forge.util.encode64(encryptedData);
//     return sec;
//   } catch (err) {
//     console.error(err);
//   }
// }

async function createCircleWallet() {
  const url = "https://api-sandbox.circle.com/v1/wallets";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${process.env.CIRCLE_API_KEY}`,
    },
    body: JSON.stringify({ idempotencyKey: uuidv4() }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error creating Circle wallet: ${data.message}`);
    }

    console.log(data);
  } catch (error) {
    console.error("Error in createCircleWallet:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}

// async function createCircleWalletSet() {
//   const url = "https://api-sandbox.circle.com/v1/w3s/developer/walletSets";
//   const options = {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       "content-type": "application/json",
//       Authorization: `Bearer ${process.env.CIRCLE_API_KEY}`,
//     },
//     body: JSON.stringify({
//       entitySecretCiphertext: await encodeSecret(),
//       idempotencyKey: uuidv4(),
//     }),
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(`Error creating Circle wallet set: ${data.message}`);
//     }
//     return data.data.walletSet.id;
//   } catch (error) {
//     console.error("Error in createCircleWalletSet:", error);
//     throw error;
//   }
// }

// async function createCircleWallet() {
//   const walletSetId = await createCircleWalletSet();
//   const url = "https://api-sandbox.circle.com/v1/w3s/developer/wallets"; // Use the sandbox URL for testing
//   console.log(walletSetId);
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.CIRCLE_API_KEY}`,
//     },
//     body: JSON.stringify({
//       blockchains: ["ETH"],
//       idempotencyKey: uuidv4(),
//       entitySecretCiphertext: await encodeSecret(),
//       walletSetId: walletSetId,
//     }),
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(`Error creating Circle wallet: ${data.message}`);
//     }

//     console.log(data.data.wallet.address);
//     return data.data.wallet.address; // Assuming the API returns the wallet ID in this format
//   } catch (error) {
//     console.error("Error in createCircleWallet:", error);
//     throw error; // Rethrow the error to handle it in the calling function
//   }
// }
