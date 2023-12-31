import { Link } from "react-router-dom";
import { useSDK } from "@metamask/sdk-react";

type NavBarProps = {
  connectWallet: () => void;
  connectedAddress: string | null;
  setConnectedAddress: (connectedAddress: string | null) => void;
};

function NavBar({
  connectWallet,
  connectedAddress,
  setConnectedAddress,
}: NavBarProps) {
  const { sdk } = useSDK(); // You don't need 'account' here since you're receiving 'connectedAddress' from props

  const disconnectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      await window.ethereum.request({
        method: "wallet_revokePermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
    }

    // Using the SDK's disconnect method
    setConnectedAddress(null); // Clear the connected address state
    localStorage.removeItem("wallet"); // Remove from local storage
  };

  return (
    <div className="relative flex justify-center py-16">
      <nav className="w-3/4 flex justify-between items-center border border-black px-6 py-3 rounded-full font-main">
        <span className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/fundraisers">Donate/Fundraise</Link>
        </span>

        <span className="flex space-x-4">
          <button
            disabled={connectedAddress !== null}
            className={`bg-primary text-text px-3 py-3 rounded-full`}
            onClick={connectWallet}
          >
            {connectedAddress !== null ? connectedAddress : "Connect Wallet"}
          </button>
          {connectedAddress !== null && (
            <button
              className="bg-accent text-background px-3 py-3 rounded-full max-w-32"
              onClick={disconnectWallet}
            >
              Disconnect
            </button>
          )}
        </span>
      </nav>
    </div>
  );
}

export default NavBar;
