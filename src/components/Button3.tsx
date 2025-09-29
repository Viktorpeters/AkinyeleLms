"use client";
import { ArrowRight } from "lucide-react";
import styles from "./Button3.module.css"

export default function ProgramCard() {
  return (
    <button className={styles.cssbuttonsiobutton}>
      Learn More
      <div className={styles.icon}>
        <ArrowRight size={18} />
      </div>
    </button>
  );
}
