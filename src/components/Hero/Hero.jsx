import React from "react";
import styles from "./Hero.module.css"; // Correct import for CSS modules
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Moving Your Goods with Care here and there.....
        </h1>
        <p className={styles.description}>
        Manufacturing goods, we’re here to transport,
        With our own trucks, it’s a seamless report.
        From one spot to the next, we’re on track,
        Reliable, fast, we’ve always got your back.
        Multi-route deliveries, smooth and fair,
        Courierse gets your products there!"

        </p>
        <a href="mailto:info.courierse#gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
    {/* For Desktop View */}
  <img
    src="/assets/hero/heromapcse.gif"
    alt="Hero GIF for Desktop"
    className={`${styles.heroImg} ${styles.desktopGif}`}
  />

  {/* For Mobile View */}
  <img
    src="/assets/hero/heromobile.gif"
    alt="Hero GIF for Mobile"
    className={`${styles.heroImg} ${styles.mobileGif}`}
  />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
