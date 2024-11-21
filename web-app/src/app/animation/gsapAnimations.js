import {useRef} from "react";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import styles from "./gsap.module.css";

gsap.registerPlugin(useGSAP);

export default function GSAPAnimations() {
    const container = useRef();

    useGSAP(() => {
        gsap.to('.confetti', {rotation: 360, repeat: -1, duration: 3});
        gsap.to('.heart', {rotation: 360, repeat: -1, duration: 3});
        gsap.to('.lettuce', {rotation: 360, repeat: -1, duration: 3});
    },{scope: container});

    return (
        <section className={styles.cssSection} ref={container}>
            <span className={styles.confetti + " confetti"}>🎊</span>
            <span className={styles.heart + " heart"}>🩵</span>
            <span className={styles.lettuce + " lettuce"}>🥬</span>
        </section>
    );
}