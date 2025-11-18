
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const handleLogin = () => {
    nav("/home");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Sign in to your account to continue</p>

        <input style={styles.input} placeholder="Enter your email or phone" />
        <input style={styles.input} type="password" placeholder="Enter your password" />

        <p 
          style={styles.forgot}
          onClick={() => nav("/forgot-password")}
        >
          Forgot Password?
        </p>

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <b 
            style={{ cursor: "pointer", color: "#007bff" }}
            onClick={() => nav("/signup")}
          >
            Sign Up
          </b>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f6f9",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  title: { textAlign: "center", marginBottom: "10px" },
  subtitle: { textAlign: "center", color: "#666", marginBottom: "20px" },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  forgot: {
    textAlign: "right",
    color: "#007bff",
    cursor: "pointer",
    marginBottom: "20px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "15px",
  },
};
