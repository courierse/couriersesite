import React from "react";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Save Big with Courierse – Efficient and Affordable Deliveries
        </h1>
        <p className={styles.description}>
          "Why pay more? With Courierse, save on every score!<br />
          Seamless routes, cost-effective too—deliver more for less, it's what we do!
          Our trucks are set to make it quick, saving you time with every trip!"
        </p>

        {/* Features Section */}
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Cost-Effective Delivery</h3>
            <p className={styles.featureDescription}>Deliver up to 10 Kg for just ₹99 – the most affordable rates for your deliveries.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}> Flexible Weight Pricing</h3>
            <p className={styles.featureDescription}>Add extra weight for just ₹5 per Kg beyond 10 Kg. Transparent and easy pricing</p>
          </div>
        </div>

        <a href="tel:+917042028577" className={styles.contactBtn}>
          Place Your Delivery
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
