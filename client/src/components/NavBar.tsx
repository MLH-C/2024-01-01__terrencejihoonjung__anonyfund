import { Link } from "react-router-dom";
import * as fcl from "@onflow/fcl";
type User = {
  loggedIn: boolean;
  addr?: string;
};

type NavBarProps = {
  connectWallet: () => void;
  user: User;
};

function NavBar({ connectWallet, user }: NavBarProps) {
  const disconnectWallet = async () => {
    fcl.unauthenticate(); // Logs the user out
  };

  return (
    <div className="relative flex justify-center py-16">
      <nav className="w-3/4 flex justify-between items-center border border-black px-6 py-3 rounded-full font-main">
        <span className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/campaigns">Donate/Fundraise</Link>
        </span>

        <span className="flex space-x-4">
          <button
            disabled={user.loggedIn}
            className={`bg-primary text-text px-3 py-3 rounded-full`}
            onClick={connectWallet}
          >
            {user.loggedIn ? user.addr : "Connect Wallet"}
          </button>
          {user.loggedIn && (
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
