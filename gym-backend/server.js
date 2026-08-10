import dns from "node:dns";

dns.setServers([
  "8.8.8.8",
  "8.8.4.4",
]);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import adminRoutes from "./routes/adminRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";

dotenv.config();

const app = express();

/* =========================================
   CORS CONFIGURATION
========================================= */

const allowedOrigins = [
  "http://localhost:5173",
  "https://gym-website-1-fzl3.onrender.com",

  // Add your Hostinger domain here later
  // "https://yourdomain.com",
  // "https://www.yourdomain.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests from Postman, curl, etc.
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS blocked:", origin);

      return callback(new Error("Not allowed by CORS"));
    },

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],

    credentials: true,
  })
);

/* =========================================
   BODY PARSER
========================================= */

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/* =========================================
   TEST ROUTE
========================================= */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "OCHRÉ Fitness Backend Running Successfully",
  });
});

/* =========================================
   API ROUTES
========================================= */

app.use("/api/contacts", contactRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/registrations", registrationRoutes);

/* =========================================
   PORT
========================================= */

const PORT = process.env.PORT || 5000;

/* =========================================
   START SERVER
========================================= */

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
      console.log(`✅ Port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup error:", error);
    process.exit(1);
  }
};

startServer();