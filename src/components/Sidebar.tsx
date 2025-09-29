"use client";

import React, { useState } from "react";
import {
  Home,
  BookOpen,
  GraduationCap,
  LogOut,
  PanelLeftClose,
  PanelRightOpen,
  Settings,
} from "lucide-react";
import Image from "next/image";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  onToggle: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Admission Status");

  const menuItems = [
    { icon: <GraduationCap size={20} />, label: "Admission Status" },
    { icon: <BookOpen size={20} />, label: "Libraries" },
    { icon: <Home size={20} />, label: "Dashboard" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    onToggle(nextState);
  };

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      {/* Header with logo */}
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image
            src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758300104/WhatsApp_Image_2025-09-19_at_17.19.02_cb5c3139_jazl8s.jpg"
            alt="KICA Logo"
            width={40}
            height={40}
            className={styles.logo}
          />
        </div>
        {isOpen && <h2 className={styles.welcome}>Welcome to KICA</h2>}
      </div>

      {/* Toggle button */}
      <button className={styles.toggleBtn} onClick={handleToggle}>
        {isOpen ? <PanelLeftClose size={22} /> : <PanelRightOpen size={22} />}
      </button>

      {/* Menu */}
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${styles.menuItem} ${
              activeTab === item.label ? styles.active : ""
            }`}
            onClick={() => setActiveTab(item.label)}
          >
            <span className={styles.icon}>{item.icon}</span>
            {isOpen && <span className={styles.label}>{item.label}</span>}
          </li>
        ))}
      </ul>

      {/* Logout */}
      <button className={styles.logout}>
        <LogOut size={20} />
        {isOpen && <span>Logout</span>}
      </button>
    </div>
  );
};

export default Sidebar;
