import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footercont}>
      <div>
        <Image
          src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758300104/WhatsApp_Image_2025-09-19_at_17.19.02_cb5c3139_jazl8s.jpg"
          height={40}
          width={60}
          alt="logo"
        />
      </div>
      <div>
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          natus alias amet veritatis id. Accusantium!
        </p>
      </div>
      <div>
        <h3>Programs</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel,
          non sint quis vero perspiciatis!
        </p>
      </div>
      <div>
        <h3>
            Get Involved
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis!</p>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Footer;
