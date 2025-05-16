'use client';

import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar} from "@/redux/slices/commonSlice";
import { RootState } from "@/redux/store";
export default function DemoPage() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootState) => state.common.isVisible);

  return (
    <div style={{ padding: 20 }}>
      <h2>🔄 Toggle Visibility Example</h2>

      <button
        onClick={() => dispatch(toggleSidebar())}
        style={{
          padding: "10px 20px",
          backgroundColor: isVisible ? "crimson" : "green",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: 10,
        }}
      >
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {isVisible && (
        <div
          style={{
            padding: "10px",
            background: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          👋 Hello! I am now visible.
        </div>
      )}
    </div>
  );
}
