import React from 'react';
import Image from "next/image";
import { ChartNoAxesColumnIncreasing, PanelRight } from 'lucide-react';
import styles from "./Sidebar.module.css"

const SideBar = () => {
  return (
    <div className={styles.sidebarcont}>
        <div>
            <Image src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758300104/WhatsApp_Image_2025-09-19_at_17.19.02_cb5c3139_jazl8s.jpg" width={50} height={30} alt='logo' />
            <p>Welcome to KICA</p>
        </div>

        <div>
            <ul>
                <li>Admission Status</li>
                <li>Libraries</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <button>Logout</button>
        </div>
    </div>
  )
}

export default SideBar;