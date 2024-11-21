"use client";

import {useState} from "react";
import styles from "./page.module.css";
import CSSAnimations from "./cssAnimations";
import WAAPIAnimations from "./waapiAnimations";
import GSAPAnimations from "./gsapAnimations";

export default function Page() {

    const [animationType, setAnimationType] = useState("CSS");

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>
                    An<span className={styles.orange}>i</span>mate 
                    everyth<span className={styles.flipper}>i</span>ng!
                </h1>
                <button className={styles.headerButton} onClick={() => setAnimationType("CSS")}>CSS!
                    <span className={styles.confetti}>🦋</span>
                    <span className={styles.moreConfetti}>🪐</span>
                    <span className={styles.evenMoreConfetti}>🎉</span>
                </button>
                <button className={styles.headerButton} onClick={() => setAnimationType("WAAPI")}>Web Animation API!
                    <span className={styles.confetti}>🌸</span>
                    <span className={styles.moreConfetti}>⭐️</span>
                    <span className={styles.evenMoreConfetti}>🎈</span>
                </button>
                <button className={styles.headerButton} onClick={() => setAnimationType("GSAP")}>GSAP! 
                    <span className={styles.confetti}>🎊</span>
                    <span className={styles.moreConfetti}>🩵</span>
                    <span className={styles.evenMoreConfetti}>🥬</span>
                </button>
            </header>
            <div className={styles.content}>
            {(() => {
                switch(animationType) {
                    case "CSS": return <CSSAnimations/>;
                    case "WAAPI": return <WAAPIAnimations/>;
                    case "GSAP": return <GSAPAnimations/>;
                default: return <CSSAnimations/>;
            }})()}
            </div>
        </div>
    );
}
