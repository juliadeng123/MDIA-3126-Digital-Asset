import styles from "./css.module.css";

export default function CSSAnimations() {
    return (
        <section className={styles.cssSection}>
            <span className={styles.butterfly}>🦋</span>
            <span className={styles.planet}>🪐</span>
            <span className={styles.tada}>🎉</span>
        </section>
    );
}