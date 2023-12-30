import { Link } from "react-router-dom";

function NavBar() {
  function handleWalletModal() {
    const modal = document.getElementById(
      "wallet-modal"
    ) as HTMLDialogElement | null;
    if (modal) modal.showModal();
  }
  return (
    <div className="relative flex justify-center py-16">
      <nav className="w-3/4 flex justify-between items-center border border-black px-6 py-3 rounded-full font-main">
        <span className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/fundraisers">Donate/Fundraise</Link>
        </span>

        <button
          className="bg-primary text-text px-3 py-3 rounded-full"
          onClick={() => handleWalletModal()}
        >
          Connect Wallet
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
