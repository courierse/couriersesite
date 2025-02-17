import React, { useState, useEffect } from "react";
import styles from "./Cards.module.css";

const Cards = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <h1 className={styles.centeredTitle}>How We Work?</h1>
      <p className={styles.subtitle}>
        CourierSe provides efficient, affordable delivery solutions for manufacturers using a strategically located fleet.
      </p>

      <div className={styles.cardContainer}>
        {/* Display first three cards always */}
        <div className={styles.card}>
          <h1>Place Your Order</h1>
          <img
            src="/assets/cards/placeorder.png"
            alt="Order"
            className={styles.icon}
          />
          <p>
            Once you've placed your delivery request through CourierSe, we immediately begin coordinating the most efficient delivery route based on your pickup and drop-off locations.
          </p>
        </div>

        <div className={styles.card}>
          <h1>Fixed Route Network</h1>
          <img
            src="/assets/cards/fixedroutes.png"
            alt="Order"
            className={styles.icon}
          />
          <p>
            CourierSe vehicles operate on fixed city routes, ensuring efficient deliveries by seamlessly transferring goods between vehicles when needed to cover different segments of the journey.
          </p>
        </div>

        <div className={styles.card}>
          <h1>Multi-Routes</h1>
          <img
            src="/assets/cards/multiroute-map.png"
            alt="Order"
            className={styles.icon}
          />
          <p>
            If a product needs to travel across different routes, our vehicles coordinate efficiently, transferring goods smoothly at designated points to ensure timely delivery.
          </p>
        </div>

        {/* Conditionally render the rest of the cards */}
        {(showMore || !isMobile) && (
          <>
            <div className={styles.card}>
              <h1>Real-Time Tracking</h1>
              <img
                src="/assets/cards/real-time-tracking.png"
                alt="Tracking"
                className={styles.icon}
              />
              <p>
                We provide real-time tracking for all your deliveries. From pickup to final destination, you can monitor the movement of your products, ensuring peace of mind with complete visibility of the entire delivery process.
              </p>
            </div>

            <div className={styles.card}>
              <h1>Affordable Pricing</h1>
              <img
                src="/assets/cards/saving-money.png"
                alt="Pricing"
                className={styles.icon}
              />
              <p>
                Our business model reduces costs by using our own vehicles and fixed routes, eliminating third-party logistics, and offering competitive pricing for both single and multi-route deliveries.
              </p>
            </div>

            <div className={styles.card}>
              <h1>Reliability</h1>
              <img
                src="/assets/cards/reliability.png"
                alt="Reliability"
                className={styles.icon}
              />
              <p>
                At CourierSe, we ensure reliable, on-time deliveries by combining efficient teamwork and technology. Owning our fleet allows full control over scheduling, minimizing delays and ensuring fast, safe product deliveries.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Show More Button only for mobile view */}
      {isMobile && (
        <div className={styles.showMoreContainer}>
          <button className={styles.showMoreButton} onClick={handleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
