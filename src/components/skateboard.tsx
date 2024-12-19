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
      let dragRotation = { x: 0, y: 0 }; // Store current rotation

      // Initial animation on load to show it's draggable, ending where we want it to "reset"
      gsap.fromTo(boardRef.current, 
        { rotationX: 0, rotationY: 270, rotationZ: 0 }, // Start from neutral
        {
          duration: 5, 
          rotationX: 360, // Animate to 360 degrees in X
          rotationY: 360, // Animate to 360 degrees in Y
          rotationZ: 360, // Animate to 360 degrees in Z
          ease: "power2.out",
          onComplete: () => {
            // Reset to neutral position after animation for a seamless transition
            gsap.set(boardRef.current, { rotationX: 0, rotationY: 0, rotationZ: 0 });
          }
        }
      );

      // Skateboard dragging logic using GSAP Observer
      Observer.create({
        preventDefault: false,
        onChangeX({ deltaX }) {
          dragRotation.y -= deltaX / 5;
          gsap.to(boardRef.current, { rotationY: dragRotation.y, duration: -2 });
          root.style.setProperty("--x", (parseInt(root.style.getPropertyValue("--x") || "0", 10) - deltaX).toString());
        },
        onChangeY({ deltaY }) {
          dragRotation.x += deltaY / 5;
          gsap.to(boardRef.current, { rotationX: dragRotation.x, duration: 2 });
          root.style.setProperty("--y", (parseInt(root.style.getPropertyValue("--y") || "0", 10) + deltaY).toString());
        },
      });

      // Initial positioning for animation
      root.style.setProperty("--x", "0");
      root.style.setProperty("--y", "0");
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