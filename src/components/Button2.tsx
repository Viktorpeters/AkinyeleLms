import React from "react";
import styles from "./Button2.module.css";

interface Button2Props {
  href?: string;           
  children: React.ReactNode;
  onClick?: () => void;
}

const Button2: React.FC<Button2Props> = ({ href, children, onClick }) => {
  // If href exists, render <a>, otherwise <button>
  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={styles.fancy}
    >
      <span className={styles.topkey}></span>
      <span className={styles.text}>{children}</span>
      <span className={styles.bottomkey1}></span>
      <span className={styles.bottomkey2}></span>
    </Tag>
  );
};

export default Button2;
