const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;
const API_URL = "https://api.ssrinnovationlab.com/api/fuel-prices/";

app.use(cors());
app.use(express.json());

// 🔥 MAIN ROUTE
app.get("/api/fuel", async (req, res) => {
  try {
    console.log("🔥 Calling SSR Fuel API...");

    const response = await axios.get(API_URL, {
      headers: {
        "x-api-key": process.env.API_KEY,
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      },
    });

    console.log("✅ SSR API HIT SUCCESS");
    console.log(response);

    res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error(
      "❌ ERROR:",
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch fuel data",
    });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server running`);
});