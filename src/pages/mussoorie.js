import React from "react";
import { useNavigate } from "react-router-dom";

export default function Mussoorie() {
  const navigate = useNavigate();

  const goToBooking = () => {
    navigate("/booking");   
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img
          src="/image/mussoorie-hotels.jpg"
          alt="Mussoorie"
          style={styles.image}
        />

        <h2>Mussoorie Hill Resort</h2>
        <p style={styles.text}>
          A luxury stay in the Queen of Hills. Enjoy mountain views, peaceful
          surroundings, and premium hospitality.
        </p>

        <h3>Amenities</h3>
        <ul style={styles.list}>
          <li>Mountain View</li>
          <li>Premium Rooms</li>
          <li>Restaurant & Cafe</li>
          <li>Free Parking</li>
          <li>Free Wi-Fi</li>
        </ul>

        <button style={styles.button} onClick={goToBooking}>
          Book Now
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    background: "#f4f5f8",
    minHeight: "100vh"
  },
  card: {
    maxWidth: "700px",
    margin: "0 auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)"
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "15px"
  },
  text: {
    marginBottom: "15px",
    fontSize: "16px"
  },
  list: {
    marginBottom: "20px",
    lineHeight: "28px"
  },
  button: {
    width: "100%",
    padding: "15px",
    background: "#5a4bff",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer"
  }
};


