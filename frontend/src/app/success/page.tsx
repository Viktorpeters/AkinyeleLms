"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./animate.module.css";

const Animation = () => {
  return (
    <div className={styles.animationContainer}>
     
      <motion.div
        className={styles.circle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.div
          className={styles.checkmark}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          ✓
        </motion.div>
      </motion.div>

      {/* Success text */}
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        You have created an account successfully
      </motion.h3>

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link href="./dashboard">
          <button className={styles.button}>Proceed to dashboard</button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Animation;
