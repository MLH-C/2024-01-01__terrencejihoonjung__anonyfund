import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.tsx";
import CampaignForm from "./CampaignForm.tsx";

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

type RootProps = {
  connectWallet: () => void;
  connectedAddress: string | null;
  setConnectedAddress: React.Dispatch<React.SetStateAction<string | null>>;
  setCampaigns: React.Dispatch<React.SetStateAction<Campaign[]>>;
};

function Root({
  connectWallet,
  connectedAddress,
  setConnectedAddress,
  setCampaigns,
}: RootProps) {
  const [campaignCreated, setCampaignCreated] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar
        connectWallet={connectWallet}
        connectedAddress={connectedAddress}
        setConnectedAddress={setConnectedAddress}
      />
      <Outlet />

      <dialog id="wallet-modal" className="modal ">
        <div className="font-main modal-box bg-background">
          <h3 className="font-bold text-lg">Detected Wallets</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog id="create-modal" className="modal">
        <div className="font-main modal-box bg-background p-8">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create Fundraiser</h3>
          <CampaignForm
            setCampaignCreated={setCampaignCreated}
            setCampaigns={setCampaigns}
          />
        </div>
      </dialog>

      {campaignCreated && (
        <div className="toast">
          <div className="alert alert-info bg-secondary">
            <span>Campaign Successfully Created</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Root;
