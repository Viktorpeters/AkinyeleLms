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
    avatar: "", 
  };

  
  const getInitials = (name: string) => {
    const names = name.split(" ");
    const first = names[0]?.charAt(0).toUpperCase() || "";
    const last = names[1]?.charAt(0).toUpperCase() || "";
    return first + last;
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
       
        <button className={styles.toggleBtn} onClick={onToggle}>
          {sidebarOpen ? <PanelLeftClose color="black" size={27} /> : <PanelRightOpen color="black" size={27} />}
        </button>
      </div>

      <div className={styles.right}>
        
        <button className={styles.iconBtn}>
          <Bell size={20} />
          <span className={styles.notificationDot}>1</span>
        </button>

        <div className={styles.user}>
        
          {user.avatar ? (
            <Image src={user.avatar} alt={user.name} width={40} height={40} className={styles.avatar} />
          ) : (
            <div className={styles.initials}>{getInitials(user.name)}</div>
          )}

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
