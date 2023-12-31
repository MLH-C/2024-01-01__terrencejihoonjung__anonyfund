import { useState } from "react";
import * as fcl from "@onflow/fcl";

type Campaign = {
  category: string;
  createdAt: number;
  description: string;
  goalAmount: number;
  imageUrl: string;
  ownerWalletAddress: string;
  raisedAmount: number;
  title: string;
};

type InfoCardProps = {
  currentCampaign: Campaign;
};

function InfoCard({ currentCampaign }: InfoCardProps) {
  const [donateAmount, setDonateAmount] = useState("");

  async function handleSubmit() {
    try {
      const transactionId = await sendTransaction(parseFloat(donateAmount));

      console.log("Transaction ID:", transactionId);
      alert("Donation transaction sent!");
    } catch (error) {
      console.error("Transaction failed", error);
      alert("Transaction failed");
    }
  }

  const sendTransaction = async (amount: number) => {
    const transactionId = await fcl.mutate({
      cadence: `
        import FungibleToken from 0x9a0766d93b6608b7
        import FlowToken from 0x7e60df042a9c0868
  
        transaction(recipient: Address, amount: UFix64) {
          let sentVault: @FungibleToken.Vault
  
          prepare(signer: AuthAccount) {
            let vaultRef = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
                ?? panic("Could not borrow reference to the owner's Vault!")
  
            self.sentVault <- vaultRef.withdraw(amount: amount)
          }
  
          execute {
            let recipient = getAccount(recipient)
            let receiverRef = recipient.getCapability(/public/flowTokenReceiver)
                .borrow<&{FungibleToken.Receiver}>()
                ?? panic("Could not borrow receiver reference to the recipient's Vault")
  
            receiverRef.deposit(from: <-self.sentVault)
          }
        }
      `,
      args: (arg: any, t: any) => [
        arg(currentCampaign.ownerWalletAddress, t.Address),
        arg(amount, t.UFix64),
      ],
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 100,
    });

    return transactionId;
  };

  return (
    <div className="p-8 flex flex-col border border-slate-200 shadow-md rounded-md space-y-16">
      {currentCampaign.ownerWalletAddress ? (
        <>
          <div className="flex flex-col space-y-8 max-w-full">
            <span className="flex flex-col space-y-1">
              <span className="flex justify-between">
                <span>
                  <h1 className="font-black text-2xl">
                    {currentCampaign.title}
                  </h1>
                </span>

                <h3 className="font-black text-md">
                  ${currentCampaign.raisedAmount} / $
                  {currentCampaign.goalAmount} raised
                </h3>
              </span>

              <p className="text-sm font-light">
                By {currentCampaign.ownerWalletAddress}
              </p>
              <p className="font-black px-2 py-1 rounded-full bg-accent text-background max-w-fit">
                {currentCampaign.category}
              </p>
            </span>

            <img src={currentCampaign.imageUrl} className="" />

            <p className="break-words">{currentCampaign.description}</p>
          </div>

          <span className="flex justify-end ">
            <span className="flex space-x-4">
              <input
                className="w-48 appearance-none p-2 border border-slate-200 rounded-md"
                placeholder="Enter Custom Amount"
                type="text"
                id="custom-amount"
                value={donateAmount}
                onChange={(e) => setDonateAmount(e.target.value)}
                required
              />
              <button
                onClick={handleSubmit}
                className="bg-accent text-background px-4 py-3 rounded-md"
              >
                Donate
              </button>
            </span>
          </span>
        </>
      ) : null}
    </div>
  );
}

export default InfoCard;
