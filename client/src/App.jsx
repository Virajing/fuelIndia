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


      {loading && <p style={styles.info}>Loading...</p>}

      {/* 🔥 Cards */}
      <div style={styles.grid}>
  
  {/* Maharashtra */}
  <div style={styles.card}>
    <h2 style={styles.state}>Maharashtra</h2>

    <div style={styles.row}>
      <span>Petrol</span>
      <strong>₹106.31</strong>
    </div>

    <div style={styles.row}>
      <span>Diesel</span>
      <strong>₹94.27</strong>
    </div>

    <div style={styles.row}>
      <span>CNG</span>
      <strong>₹87.00</strong>
    </div>
  </div>
{/* Telangana */}
<div style={styles.card}>
  <h2 style={styles.state}>Telangana</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹99.10</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹92.40</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹95.20</strong></div>
</div>

{/* Tripura */}
<div style={styles.card}>
  <h2 style={styles.state}>Tripura</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹97.20</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.10</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.50</strong></div>
</div>

{/* Uttar Pradesh */}
<div style={styles.card}>
  <h2 style={styles.state}>Uttar Pradesh</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹98.30</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹92.00</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹94.60</strong></div>
</div>

{/* Uttarakhand */}
<div style={styles.card}>
  <h2 style={styles.state}>Uttarakhand</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹97.80</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.70</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.90</strong></div>
</div>

{/* Odisha */}
<div style={styles.card}>
  <h2 style={styles.state}>Odisha</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹98.90</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹92.80</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹95.40</strong></div>
</div>

{/* Sikkim */}
<div style={styles.card}>
  <h2 style={styles.state}>Sikkim</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹97.10</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.30</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.60</strong></div>
</div>

{/* Nagaland */}
<div style={styles.card}>
  <h2 style={styles.state}>Nagaland</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹96.80</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹90.90</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.20</strong></div>
</div>

{/* Manipur */}
<div style={styles.card}>
  <h2 style={styles.state}>Manipur</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹97.50</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.60</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹94.00</strong></div>
</div>

{/* Meghalaya */}
<div style={styles.card}>
  <h2 style={styles.state}>Meghalaya</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹96.90</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.20</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.70</strong></div>
</div>

{/* Mizoram */}
<div style={styles.card}>
  <h2 style={styles.state}>Mizoram</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹97.00</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.40</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.80</strong></div>
</div>

{/* Union Territories */}

{/* Andaman and Nicobar Islands */}
<div style={styles.card}>
  <h2 style={styles.state}>Andaman and Nicobar Islands</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹96.20</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹90.50</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹92.80</strong></div>
</div>

{/* Chandigarh */}
<div style={styles.card}>
  <h2 style={styles.state}>Chandigarh</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹96.50</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹90.80</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.10</strong></div>
</div>

{/* Dadra and Nagar Haveli and Daman and Diu */}
<div style={styles.card}>
  <h2 style={styles.state}>Dadra and Nagar Haveli and Daman and Diu</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹95.90</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹90.20</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹92.60</strong></div>
</div>

{/* Lakshadweep */}
<div style={styles.card}>
  <h2 style={styles.state}>Lakshadweep</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹96.70</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹90.90</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.30</strong></div>
</div>

{/* Puducherry */}
<div style={styles.card}>
  <h2 style={styles.state}>Puducherry</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹97.20</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.50</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹94.10</strong></div>
</div>

{/* Ladakh */}
<div style={styles.card}>
  <h2 style={styles.state}>Ladakh</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹98.60</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹92.70</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹95.50</strong></div>
</div>

{/* Jammu and Kashmir */}
<div style={styles.card}>
  <h2 style={styles.state}>Jammu and Kashmir</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹98.10</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹92.20</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹94.90</strong></div>
</div>

{/* Delhi (UT already but keeping separate if needed) */}
<div style={styles.card}>
  <h2 style={styles.state}>Delhi</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹96.72</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹89.62</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹74.09</strong></div>
</div>
 {/* Andhra Pradesh */}
<div style={styles.card}>
  <h2 style={styles.state}>Andhra Pradesh</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹98.21</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.34</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹95.11</strong></div>
</div>

{/* Arunachal Pradesh */}
<div style={styles.card}>
  <h2 style={styles.state}>Arunachal Pradesh</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹97.45</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹92.10</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹94.88</strong></div>
</div>

{/* Assam */}
<div style={styles.card}>
  <h2 style={styles.state}>Assam</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹96.77</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹90.55</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.12</strong></div>
</div>

{/* Bihar */}
<div style={styles.card}>
  <h2 style={styles.state}>Bihar</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹99.12</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹92.88</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹96.44</strong></div>
</div>

{/* Chhattisgarh */}
<div style={styles.card}>
  <h2 style={styles.state}>Chhattisgarh</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹97.98</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.76</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹94.52</strong></div>
</div>

{/* Goa */}
<div style={styles.card}>
  <h2 style={styles.state}>Goa</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹95.43</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹90.21</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹92.67</strong></div>
</div>

{/* Gujarat */}
<div style={styles.card}>
  <h2 style={styles.state}>Gujarat</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹96.89</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.44</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.75</strong></div>
</div>

{/* Himachal Pradesh */}
<div style={styles.card}>
  <h2 style={styles.state}>Himachal Pradesh</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹98.56</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹92.11</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹95.23</strong></div>
</div>

{/* Jharkhand */}
<div style={styles.card}>
  <h2 style={styles.state}>Jharkhand</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹97.33</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.65</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹94.01</strong></div>
</div>

{/* Karnataka */}
<div style={styles.card}>
  <h2 style={styles.state}>Karnataka</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹99.87</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹93.22</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹96.90</strong></div>
</div>

{/* Kerala */}
<div style={styles.card}>
  <h2 style={styles.state}>Kerala</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹100.12</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹94.01</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹97.55</strong></div>
</div>

{/* Madhya Pradesh */}
<div style={styles.card}>
  <h2 style={styles.state}>Madhya Pradesh</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹98.44</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹92.78</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹95.66</strong></div>
</div>

{/* Punjab */}
<div style={styles.card}>
  <h2 style={styles.state}>Punjab</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹97.65</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹91.98</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹94.22</strong></div>
</div>

{/* Rajasthan */}
<div style={styles.card}>
  <h2 style={styles.state}>Rajasthan</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹99.54</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹93.12</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹96.03</strong></div>
</div>

{/* Tamil Nadu */}
<div style={styles.card}>
  <h2 style={styles.state}>Tamil Nadu</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹98.77</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹92.66</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹95.31</strong></div>
</div>

{/* West Bengal */}
<div style={styles.card}>
  <h2 style={styles.state}>West Bengal</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹99.22</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹93.45</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹96.12</strong></div>
</div>

{/* UT Example */}
<div style={styles.card}>
  <h2 style={styles.state}>Chandigarh</h2>
  <div style={styles.row}><span>Petrol</span><strong>₹96.50</strong></div>
  <div style={styles.row}><span>Diesel</span><strong>₹90.80</strong></div>
  <div style={styles.row}><span>CNG</span><strong>₹93.10</strong></div>
</div>

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