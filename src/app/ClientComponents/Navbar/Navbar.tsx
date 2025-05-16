"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle: React.CSSProperties = {
    display: "flex",
    gap: "20px",
    padding: "16px",
    background: "#f5f5f5",
    position: "relative",
  };

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "40px",
    left: "0px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    display: isOpen ? "block" : "none",
    zIndex: 10,
  };

  return (
    <nav style={navStyle}>
      <Link href="/">Home</Link>

      <Link href="/client">Our Story</Link>
                 <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}
