export const sendDonation = async (req, res) => {
  try {
    const { amount, recipientWallet } = req.body;

    const url = "https://api-sandbox.circle.com/v1/transfers";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CIRCLE_API_KEY}`,
    };
    const body = {
      source: {
        // Configure the source of funds
      },
      destination: {
        type: "blockchain",
        address: recipientWallet,
        chain: "ETH", // or appropriate blockchain identifier
      },
      amount: {
        amount: amount.toString(),
        currency: "USDC",
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const transactionResult = await response.json();
    res.json(transactionResult);
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};

export const getTransactionHistory = async (req, res) => {
  const { campaignWalletId } = req.body;

  try {
    const url = `https://api.circle.com/v1/wallets/${walletId}/transactions`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CIRCLE_API_KEY}`,
    };

    const response = await fetch(url, { headers });
    const transactions = await response.json();
    res.json(transactions);
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    res.status(500).send("Error fetching transaction history");
  }
};
