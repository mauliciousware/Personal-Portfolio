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

      // Dragging observer
      const observer = Observer.create({
        // Remove the target property to allow dragging from anywhere
        preventDefault: false,
        onDragStart: () => {
          // No need to pause an animation here as there's no ongoing animation after initial one
        },
        onDragEnd: () => {
          // Board remains in last position dragged to; no further action needed
        },
        onChangeX({ deltaX }) {
          dragRotation.y -= deltaX / 2;
          gsap.to(boardRef.current, { rotationY: dragRotation.y, duration: 0.1 });
          root.style.setProperty("--x", (parseInt(root.style.getPropertyValue("--x") || "0", 10) - deltaX).toString());
        },
        onChangeY({ deltaY }) {
          dragRotation.x += deltaY / 2;
          gsap.to(boardRef.current, { rotationX: dragRotation.x, duration: 0.1 });
          root.style.setProperty("--y", (parseInt(root.style.getPropertyValue("--y") || "0", 10) + deltaY).toString());
        },
      });

      // Clean up observer on component unmount
      return () => observer.kill();
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