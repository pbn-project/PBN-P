import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="Logo">
      <Link to="/home" className="Logo-Link">
        PBN-P
      </Link>
    </div>
  );
}
export default Logo;
