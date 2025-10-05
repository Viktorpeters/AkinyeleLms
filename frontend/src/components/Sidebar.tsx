import React, { useState, useEffect } from "react";
import {
  BookOpen,
  GraduationCap,
  LogOut,
  PanelLeftClose,
  PanelRightOpen,
} from "lucide-react";
import Image from "next/image";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, isMobile }) => {
  const [activeTab, setActiveTab] = useState("Admission Status");

  const menuItems = [
    { icon: <GraduationCap  size={20} />, label: "Admission Status" },
  ];

  return (
    <>
      {isMobile && isOpen && <div className={styles.overlay} onClick={onToggle}></div>}

      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed} ${
          isMobile ? styles.mobile : ""
        }`}
      >
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
          {isOpen && (
            <div className={styles.titleWrapper}>
              <h2 className={styles.welcome}>KICA</h2>
              <span className={styles.subtitle}>Empowering lives</span>
            </div>
          )}
        </div>

        <button className={styles.toggleBtn} onClick={onToggle}>
          {isOpen ? <PanelLeftClose color="black" size={22} /> : <PanelRightOpen color="black" size={22} />}
        </button>

        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${styles.menuItem} ${activeTab === item.label ? styles.active : ""}`}
              onClick={() => setActiveTab(item.label)}
            >
              <span className={styles.icon}>{item.icon}</span>
              {isOpen && <span className={styles.label}>{item.label}</span>}
            </li>
          ))}
        </ul>

        <button className={styles.logout}>
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
