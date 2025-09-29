"use client";

import React from "react";
import { Bell, Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import styles from "./DashHeader.module.css";


const DashHeader = () => {
  const user = {
    name: "Mubarak Ososanya",
    email: "mubarak.kica@gmail.com",
    avatar: "/avatar.png", 
  };

  return (
    <header className={styles.header}>
      
      <div className={styles.left}>
        <Image
          src="/logo.png" 
          alt="KICA Logo"
          width={40}
          height={40}
          className={styles.logo}
        />
        <h1 className={styles.title}>Dashboard</h1>
      </div>

      
      

     
      <div className={styles.right}>
        <button className={styles.iconBtn}>
          <Bell size={20} />
        </button>

        <div className={styles.user}>
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={36}
            height={36}
            className={styles.avatar}
          />
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
