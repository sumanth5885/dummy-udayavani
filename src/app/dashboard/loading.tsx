"use client";

import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <CircularProgress style={{ marginBottom: "1rem" }} />
   
    </div>
  );
}
