"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import DashHeader from "@/components/DashHeader";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar onToggle={setSidebarOpen} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          transition: "margin-left 0.3s ease",
          marginLeft: isMobile ? 0 : sidebarOpen ? "220px" : "70px",
        }}
      >
        <DashHeader />
        <main style={{ flex: 1, padding: "20px" }}>{children}</main>
      </div>
    </div>
  );
}
