import React from "react";
import styles from "./Option.module.css"
const Menu = () => {
  return (
    <div>
      <label className={styles.container}>
        <input type="checkbox" />
        <div className={styles.checkmark}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
    </div>
  );
};

export default Menu;
