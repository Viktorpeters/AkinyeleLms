"use client";

import React from "react";
import { Bell, ChevronDown, PanelLeftClose, PanelRightOpen } from "lucide-react";
import Image from "next/image";
import styles from "./DashHeader.module.css";

interface DashHeaderProps {
  sidebarOpen: boolean;
  onToggle: () => void;
}

const DashHeader: React.FC<DashHeaderProps> = ({ sidebarOpen, onToggle }) => {
  const user = {
    name: "Mubarak Ososanya",
    email: "mubarak.kica@gmail.com",
    avatar:
      "https://res.cloudinary.com/ddlnqthao/image/upload/v1758300104/WhatsApp_Image_2025-09-19_at_17.19.02_cb5c3139_jazl8s.jpg",
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/* Sidebar toggle button moved here */}
        <button className={styles.toggleBtn} onClick={onToggle}>
          {sidebarOpen ? <PanelLeftClose color="black" size={27} /> : <PanelRightOpen color="black" size={27} />}
        </button>

        {/* Optional: logo/title */}
        {/* <Image src={user.avatar} alt="Logo" width={40} height={40} />
        <h1 className={styles.title}>Dashboard</h1> */}
      </div>

      <div className={styles.right}>
        <button className={styles.iconBtn}>
          <Bell size={20} />
        </button>

        <div className={styles.user}>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user.name}</span>
            <span className={styles.userEmail}>{user.email}</span>
          </div>
          <ChevronDown size={18} />
        </div>
      </div>
    </header>
  );
};

export default DashHeader;
