import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { MetaMaskProvider } from "@metamask/sdk-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Anonyfund",
          url: "http://localhost:5173",
        },
        // Other options
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>
);
