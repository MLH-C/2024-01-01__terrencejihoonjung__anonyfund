import express from "express"; // Express
import morgan from "morgan"; // Logger
import cors from "cors"; // Cross-Origin Resource Sharing
import cookieParser from "cookie-parser"; // Parse Cookies from Client
import campaigns from "./routes/campaigns.mjs";
import transactions from "./routes/transactions.mjs";
import wallets from "./routes/wallets.mjs";

const app = express(); // Initialize Express App

// Middleware
app.use(cookieParser());
app.use(express.json()); // Body-Parser
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your front-end's URL
    credentials: true,
  })
);

// Routes
const apiRouter = express.Router();
app.use("/api", apiRouter);
apiRouter.use("/campaigns", campaigns);
apiRouter.use("/transactions", transactions);
apiRouter.use("/wallets", wallets);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
