import express from "express"; // Express
import morgan from "morgan"; // Logger
import cors from "cors"; // Cross-Origin Resource Sharing
import cookieParser from "cookie-parser"; // Parse Cookies from Client
import { db } from "./firebase.mjs";
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

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
