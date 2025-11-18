
import React, { useState } from "react";

export default function Booking() {
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    
    setSuccess(true);
  };

  return (
    <div className="container">
      <h2>Booking / Payment</h2>

      <div className="card">
        <h3>Traveler Details</h3>
        <input placeholder="Traveler Name" />
        <input placeholder="Age" />
        <input placeholder="Gender" />

        <h3>Contact Details</h3>
        <input placeholder="Email Address" />

        <h3>Payment Options</h3>
        <select>
          <option>UPI</option>
          <option>Credit / Debit Card</option>
        </select>

        <button onClick={handlePayment}>Pay Now</button>

        {success && (
          <p style={{ color: "green", marginTop: "10px", fontWeight: "bold" }}>
            Booking is Successfully Completed!
          </p>
        )}
      </div>
    </div>
  );
}

