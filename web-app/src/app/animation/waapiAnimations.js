import {useRef, useEffect} from "react";
import styles from "./waapi.module.css";

export default function WAAPIAnimations() {
    const flowerRef = useRef();
    const balloonRef = useRef();
    const starRef = useRef();

    useEffect(() => {
        flowerRef.current.animate(rotate, rotateTiming);
        balloonRef.current.animate(rotate, rotateTiming);
        starRef.current.animate(rotate, rotateTiming);
    })

    const rotate = [{transform: "rotate(0)"},{transform: "rotate(360deg)"}];
    const rotateTiming = {duration: 3000, iterations: Infinity};

return (
        <section className={styles.cssSection}>
            <span className={styles.flower} ref={flowerRef}>🌸</span>
            <span className={styles.balloon} ref={balloonRef}>🎈</span>
            <span className={styles.star} ref={starRef}>⭐️</span>
        </section>
    );
}