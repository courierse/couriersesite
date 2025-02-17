import React, { useState } from "react"; 
import styles from "./Hero.module.css";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleContactClick = () => {
    if (window.innerWidth <= 768) {
      // Mobile view - redirect to dialpad
      window.location.href = "tel:+917042028577";
    } else {
      // Desktop view - show custom modal
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Save Big with CourierSe – Efficient and Affordable Deliveries
        </h1>
        <p className={styles.description}>
          "Why pay more? With CourierSe, save on every score!<br />
          Seamless routes, cost-effective too—deliver more for less, it's what we do!
          Our trucks are set to make it quick, saving your time with every trip!"
        </p>

        {/* Features Section */}
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Cost-Effective Delivery</h3>
            <p className={styles.featureDescription}>
              Deliver up to 10 Kg for just ₹99 – the most affordable rates for your deliveries.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Flexible Weight Pricing</h3>
            <p className={styles.featureDescription}>
              Add extra weight for just ₹5 per Kg beyond 10 Kg. Transparent and easy pricing.
            </p>
          </div>
        </div>

        <button onClick={handleContactClick} className={styles.contactBtn}>
          Place Your Delivery
        </button>
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

      {/* Modal Component */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Contact Us</h2>
            <p className={styles.modalMessage}>For Booking Call or WhatsApp at +917042028577</p>
            <button className={styles.modalCloseBtn} onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
