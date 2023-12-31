import { useState, useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/Root.tsx";
import Home from "./components/Home.tsx";
import Campaigns from "./components/Campaigns.tsx";
import { useSDK } from "@metamask/sdk-react";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://anonyfund-d353f-default-rtdb.firebaseio.com",
  projectId: "anonyfund-d353f",
  storageBucket: "anonyfund-d353f.appspot.com",
  messagingSenderId: "280472646400",
  appId: "1:280472646400:web:11d2bcd3034c90d9e9f9e5",
  measurementId: "G-88B2D1YCSV",
};
initializeApp(firebaseConfig);

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
        <Route path="/campaigns" element={<Campaigns />} />
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
