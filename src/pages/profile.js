import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedEmail = localStorage.getItem("userEmail");

    if (!savedEmail) {
      alert("You are not logged in");
      nav("/");
    } else {
      setName(savedName);
      setEmail(savedEmail);
    }
  }, [nav]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");

    alert("Logged out successfully!");
    nav("/");
  };

  return (
    <div className="container" style={styles.page}>
      <h2 style={styles.title}>User Profile</h2>

      <div style={styles.card}>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>

      <div style={styles.card}>
        <h3>Profile Info</h3>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button
          style={styles.button}
          onClick={() => {
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);
            alert("Profile updated!");
          }}
        >
          Edit Profile
        </button>
      </div>

      <button style={styles.logout} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    width: "100%",
    marginTop: "15px",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  logout: {
    width: "100%",
    padding: "12px",
    background: "red",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
};


