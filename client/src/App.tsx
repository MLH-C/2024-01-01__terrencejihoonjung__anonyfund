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
import * as fcl from "@onflow/fcl";
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

fcl
  .config()
  .put("accessNode.api", "https://access-testnet.onflow.org") // Testnet access node
  // Add additional configuration as needed
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn"); // Wallet discovery for testnet

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

type User = {
  loggedIn: boolean;
  addr?: string;
};

function App() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [user, setUser] = useState<User>({ loggedIn: false });

  const fetchCampaigns = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/campaigns");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCampaigns(Object.values(data));
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };

  const connectWallet = async () => {
    try {
      await fcl.authenticate();
    } catch (error) {
      console.error("Error connecting to Flow", error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <Root
            connectWallet={connectWallet}
            user={user}
            setCampaigns={setCampaigns}
          />
        }
      >
        <Route index element={<Home />} />
        <Route
          path="/campaigns"
          element={<Campaigns user={user} campaigns={campaigns} />}
        />
      </Route>
    )
  );

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);

    fetchCampaigns();
  }, []);

  return (
    <div className="bg-background min-h-screen min-w-screen inset-0">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
