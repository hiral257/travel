
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const nav = useNavigate();

  const places = [
    {
      name: "Mussoorie",
      price: "12,000",
      img: "/image/mussoorie.jpg"
    },
    {
      name: "Chennai",
      price: "15,000",
      img: "/image/chennai.jpg"
    },
    {
      name: "Goa",
      price: "20,000",
      img: "/image/goa.jpg"
    }
  ];

  return (
    <div style={styles.container}>
      <input
        placeholder="Where do you want to go?"
        style={styles.searchBox}
      />

      {places.map((p, index) => (
        <div
          key={index}
          style={styles.card}
          onClick={() => nav("/destination")}
        >
        
          <div>
            <h3 style={styles.title}>{p.name}</h3>
            <p style={styles.price}>₹{p.price}</p>
            <button style={styles.btn}>Book Now</button>
          </div>

          <img
            src={p.img}
            alt={p.name}
            style={styles.image}
          />
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto"
  },
  searchBox: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "25px",
    fontSize: "16px"
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    cursor: "pointer"
  },
  title: { marginBottom: "5px" },
  price: { marginBottom: "15px" },

  btn: {
    background: "#007bff",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  image: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",   
    objectFit: "cover",
    marginLeft: "20px",
    border: "3px solid #f0f0f0" 
  }
};
