
import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/photo1.png";
import img2 from "../assets/photo2.png";

export default function Destination() {
  const nav = useNavigate();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2>Mussoorie</h2>

      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <img
          src={img1}
          alt="Mussoorie view 1"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />

        <img
          src={img2}
          alt="Mussoorie view 2"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />
      </div>

      <p>⭐ 4.9 (1,587 reviews)</p>

      <div
        className="card"
        style={{
          padding: "15px",
          borderRadius: "12px",
          background: "#fff",
          marginBottom: "20px"
        }}
      >
        <h3>Overview</h3>
        <p>
          Mussoorie, known as the Queen of Hills, is a beautiful hill station
          located in Uttarakhand, India. It is famous for its pleasant weather,
          scenic mountain views, and colonial charm.
        </p>
      </div>

      <button
        onClick={() => nav("/booking")}
        style={{
          padding: "12px 20px",
          background: "#5a4bff",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          width: "100%"
        }}
      >
        Book Now
      </button>
    </div>
  );
}

