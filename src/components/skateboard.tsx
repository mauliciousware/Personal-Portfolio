import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import styles from "@/app/skate.module.css"; 

gsap.registerPlugin(Observer);

const Skateboard = () => {
  const boardRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && boardRef.current) {
      const root = document.documentElement;
      let dragRotation = { x: -63.9516, y: -148.1997 }; // Initial rotation values
  
      // Initial animation on load
      gsap.fromTo(
        boardRef.current,
        { rotationX: 0, rotationY: 270, rotationZ: 0 }, // Start from neutral
        {
          duration: 5,
          rotationX: -63.9516, // Stop at the desired X position
          rotationY: -148.1997, // Stop at the desired Y position
          rotationZ: 360, // Full rotation
          ease: "power2.out",
          onComplete: () => {
            // Pause at the specified position
            gsap.set(boardRef.current, {
              rotationX: -63.9516,
              rotationY: -148.1997,
              rotationZ: 0,
            });
          },
        }
      );
  
      // Skateboard dragging logic using GSAP Observer
      Observer.create({
        preventDefault: false,
        onChangeX({ deltaX }) {
          dragRotation.y -= deltaX / 5;
          gsap.to(boardRef.current, {
            rotationY: dragRotation.y,
            duration: 3,
          });
          root.style.setProperty(
            "--x",
            (
              parseInt(root.style.getPropertyValue("--x") || "-148.1997", 10) -
              deltaX
            ).toString()
          );
        },
        onChangeY({ deltaY }) {
          dragRotation.x += deltaY / 5;
          gsap.to(boardRef.current, {
            rotationX: dragRotation.x,
            duration: 3,
          });
          root.style.setProperty(
            "--y",
            (
              parseInt(root.style.getPropertyValue("--y") || "-63.9516", 10) +
              deltaY
            ).toString()
          );
        },
      });
  
      // Set initial positioning for animation
      root.style.setProperty("--x", "-148.1997");
      root.style.setProperty("--y", "63.9516");
    }
  }, []);
  

  return (
    <section id="skateboard" className={styles.scene}>
      <div ref={boardRef} className={styles.board}>
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