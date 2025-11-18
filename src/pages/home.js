
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  const [text, setText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setText(value);

    if (value.toLowerCase() === "mussoorie") {
      nav("/mussoorie");
    }
  };

  return (
    <div style={styles.page}>
      <div
        className="card"
        style={{
          background: "linear-gradient(135deg,#5a4bff,#b544ff)",
          color: "white",
          padding: "25px",
          borderRadius: "14px",
          marginBottom: "20px",
          textAlign: "left",
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        <h2>Hi, Welcome Back</h2>
        <p>Hiral Madhu</p>

        <input
          value={text}
          onChange={handleSearch}
          placeholder="Where do you want to go?"
          style={styles.searchBox}
        />
      </div>

      <div style={styles.content}>
        <h3>Categories</h3>

        <div className="card" style={styles.card} onClick={() => nav("/search")}>
          Flights
        </div>

        <div className="card" style={styles.card} onClick={() => nav("/mussoorie")}>
          Hotels
        </div>

        <div className="card" style={styles.card} onClick={() => nav("/search")}>
          Tours
        </div>

        <h3 style={{ marginTop: "25px" }}>Quick Links</h3>
        <div className="card" style={styles.card} onClick={() => nav("/booking")}>
          My Trips
        </div>
        <div className="card" style={styles.card} onClick={() => nav("/search")}>
          Explore
        </div>
        <div className="card" style={styles.card} onClick={() => nav("/profile")}>
          Wishlist
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f4f5f8",
    minHeight: "100vh",
    padding: "20px"
  },
  content: {
    maxWidth: "700px",
    margin: "0 auto"
  },
  searchBox: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    marginTop: "10px",
    fontSize: "16px"
  },
  card: {
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "15px",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    cursor: "pointer"
  }
};

