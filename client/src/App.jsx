import React, { useEffect, useState } from "react";

const API_BASE = "https://fuelindia-6qms.onrender.com";

export default function App() {
  const [data, setData] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔥 Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_BASE);
        const json = await res.json();

        // 👇 correct extraction from your API
        const fuelData = json?.data?.data || [];

        setData(fuelData);
        setFiltered(fuelData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔥 Filter by selected state
  useEffect(() => {
    if (!selectedState) {
      setFiltered(data);
    } else {
      const result = data.filter(
        (item) =>
          (item.state_name || "").toLowerCase() ===
          selectedState.toLowerCase()
      );
      setFiltered(result);
    }
  }, [selectedState, data]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⛽ Fuel Price Dashboard</h1>

      {/* 🔽 Select Dropdown */}
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        style={styles.select}
      >
        <option value="">All States</option>
        {data.map((item, index) => (
          <option key={index} value={item.state_name}>
            {item.state_name}
          </option>
        ))}
      </select>

      {loading && <p style={styles.info}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {/* 🔥 Cards */}
      <div style={styles.grid}>
        {filtered.map((item, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.state}>
              {item.state_name || "Unknown"}
            </h2>

            <div style={styles.row}>
              <span>Petrol</span>
              <strong>
                ₹{item.fuel_prices?.petrol_price ?? "--"}
              </strong>
            </div>

            <div style={styles.row}>
              <span>Diesel</span>
              <strong>
                ₹{item.fuel_prices?.diesel_price ?? "--"}
              </strong>
            </div>

            <div style={styles.row}>
              <span>CNG</span>
              <strong>
                ₹{item.fuel_prices?.cng_price ?? "--"}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🎨 STYLES (premium UI feel)
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    color: "white",
    padding: "20px",
    fontFamily: "sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2.5rem",
    letterSpacing: "1px",
  },
  select: {
    display: "block",
    margin: "0 auto 30px",
    padding: "12px 20px",
    borderRadius: "12px",
    border: "none",
    width: "300px",
    fontSize: "16px",
    outline: "none",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "20px",
    padding: "20px",
    backdropFilter: "blur(12px)",
    transition: "0.3s",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  state: {
    marginBottom: "10px",
    fontSize: "1.4rem",
    fontWeight: "600",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
    fontSize: "1.1rem",
  },
  info: {
    textAlign: "center",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
};