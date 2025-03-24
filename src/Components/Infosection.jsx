import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import "./Infosection.css"; // Link to your CSS file

const Infosection = () => {
  return (
    <div className="shipping-container">
      <div className="icon-wrapper">
        <FaTruckFast className="logo" />
      </div>
      <div className="text">
        <h4>SHIPPING CHARGES</h4>
        <p>Starting from Rs. 120</p>
      </div>
    </div>
  );
};

export default Infosection;
