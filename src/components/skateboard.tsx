"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import styles from "@/app/skate.module.css"; 

gsap.registerPlugin(Observer);

const Skateboard = () => {
  useEffect(() => {
    // Ensure the DOM is ready and the browser environment is present
    if (typeof window !== "undefined") {
      const root = document.documentElement;

      // Skateboard animation logic using GSAP Observer
      Observer.create({
        preventDefault: false,
        onChangeX({ isDragging, deltaX }) {
          if (!isDragging) return;
          const x = root.style.getPropertyValue("--x") || "0";
          root.style.setProperty("--x", (parseInt(x, 10) - deltaX).toString());
        },
        onChangeY({ isDragging, deltaY }) {
          if (!isDragging) return;
          const y = root.style.getPropertyValue("--y") || "0";
          root.style.setProperty("--y", (parseInt(y, 10) + deltaY).toString());
        },
      });

      // Initial positioning for animation
      root.style.setProperty("--x", "0");
      root.style.setProperty("--y", "0");
    }
  }, []);

  return (
    <section id="skateboard" className={styles.scene}>
      <div className={styles.board}>
        <span className={styles.logo}>
          CSS
          <br />
          is
          <br />
          awesome
        </span>
        <div className={styles.wheel}></div>
        <div className={styles.wheel}></div>
        <div className={styles.wheel}></div>
        <div className={styles.wheel}></div>
        <div className={styles.truck}></div>
        <div className={styles.truck}></div>
      </div>
    </section>
  );
};

export default Skateboard;
