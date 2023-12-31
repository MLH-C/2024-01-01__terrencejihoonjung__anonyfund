import { useState, useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/Root.tsx";
import Home from "./components/Home.tsx";
import Fundraisers from "./components/Fundraisers.tsx";
import { useSDK } from "@metamask/sdk-react";

interface MetaMaskError extends Error {
  code?: number;
}

function App() {
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);
  const { sdk } = useSDK();

  const connectWallet = async () => {
    if (!sdk) {
      console.error("MetaMask SDK is not available");
      alert("MetaMask SDK is not available");
      return;
    }

    try {
      // Using the MetaMask SDK to connect the wallet
      const newAccount = (await sdk.connect()) as unknown as string[];
      if (newAccount.length > 0) {
        setConnectedAddress(newAccount[0]); // Update the state with the connected account
        localStorage.setItem("wallet", newAccount[0]); // Save to local storage
      }
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
      const err = error as MetaMaskError;
      if (err.code === 4001) {
        // User rejected the request
        alert("Please connect to MetaMask to use this feature.");
      }
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <Root
            connectWallet={connectWallet}
            connectedAddress={connectedAddress}
            setConnectedAddress={setConnectedAddress}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="/fundraisers" element={<Fundraisers />} />
      </Route>
    )
  );

  useEffect(() => {
    const storedAddress = localStorage.getItem("wallet");
    if (storedAddress) {
      setConnectedAddress(storedAddress);
    }
  }, []);

  return (
    <div className="bg-background min-h-screen min-w-screen inset-0">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
