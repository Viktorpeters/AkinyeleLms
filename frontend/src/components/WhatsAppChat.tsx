"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Bot, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WhatsAppChat.module.css";

export default function ChatWidget({
  welcome = "Hi there! 👋 I’m your assistant. How can I help?",
  ctaText = "Start Chat",
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click or ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container} aria-live="polite">
      {/* Popover */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={styles.popover}
            role="dialog"
            aria-label="Chat popup"
          >
            <div className={styles.popoverHeader}>
              <div className={styles.headerLeft}>
                <Bot className={styles.botIcon} />
                <span className={styles.headerTitle}>Chat with us</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className={styles.closeBtn}
                aria-label="Close chat popup"
              >
                <X className={styles.closeIcon} />
              </button>
            </div>

            <div className={styles.popoverBody}>
              <p className={styles.welcome}>{welcome}</p>

              <button className={styles.ctaBtn}>
                {ctaText}
                <ChevronRight className={styles.ctaIcon} />
              </button>

              <p className={styles.footerNote}>
                This is a demo chat popup — no external links.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <div className={styles.fabWrapper}>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="chat-popover"
          className={styles.fab}
        >
          <MessageCircle className={styles.fabIcon} />
          {/* <span className="sr-only">Chat with us</span> */}
          <span className={styles.fabPulse} />
        </button>
        <button onClick={() => setOpen(true)} className={styles.labelBtn}>
          Chat with us
        </button>
      </div>
    </div>
  );
}
