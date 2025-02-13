import React, { useState } from 'react';
import styles from './Faq.module.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      
      <div className={styles.faqItem}>
        <div className={styles.faqQuestion} onClick={() => toggleFAQ(0)}>
          <h3>What is CourierSe?</h3>
          <span className={`${styles.arrow} ${activeIndex === 0 ? styles.active : ''}`}></span>
        </div>
        {activeIndex === 0 && <p className={styles.faqAnswer}> CourierSe is a delivery service that specializes in transporting goods for businesses and manufacturing companies to their desired locations using our own vehicles and fixed routes.</p>}
      </div>

      <div className={styles.faqItem}>
        <div className={styles.faqQuestion} onClick={() => toggleFAQ(1)}>
          <h3>How do I place a delivery request? </h3>
          <span className={`${styles.arrow} ${activeIndex === 1 ? styles.active : ''}`}></span>
        </div>
        {activeIndex === 1 && <p className={styles.faqAnswer}> You can place a delivery request by Simply calling 70402028577. Simply provide the necessary details, such as pickup location, destination, package weight, and any special instructions.</p>}
      </div>

      <div className={styles.faqItem}>
        <div className={styles.faqQuestion} onClick={() => toggleFAQ(2)}>
          <h3>How much do your delivery services cost? </h3>
          <span className={`${styles.arrow} ${activeIndex === 2 ? styles.active : ''}`}></span>
        </div>
        {activeIndex === 2 && <p className={styles.faqAnswer}> Our base price for deliveries up to 10 kg is Rs 99, with an additional Rs 5 per extra kg. For example, an 11 kg delivery would cost Rs 104.</p>}
      </div>
      <div className={styles.faqItem}>
        <div className={styles.faqQuestion} onClick={() => toggleFAQ(3)}>
          <h3>What types of items can I ship? </h3>
          <span className={`${styles.arrow} ${activeIndex === 3 ? styles.active : ''}`}></span>
        </div>
        {activeIndex === 3 && <p className={styles.faqAnswer}>  We specialize in transporting goods for manufacturing companies, including equipment, raw materials, and finished products. Please check our restricted items list for any limitations.

</p>}
      </div>
      <div className={styles.faqItem}>
        <div className={styles.faqQuestion} onClick={() => toggleFAQ(4)}>
          <h3>How do you handle multiple-route deliveries? </h3>
          <span className={`${styles.arrow} ${activeIndex === 4 ? styles.active : ''}`}></span>
        </div>
        {activeIndex === 4 && <p className={styles.faqAnswer}> Our base price for deliveries up to 10 kg is Rs 99, with an additional Rs 5 per extra kg. For example, an 11 kg delivery would cost Rs 104.</p>}
      </div>
      <div className={styles.faqItem}>
        <div className={styles.faqQuestion} onClick={() => toggleFAQ(5)}>
          <h3>How much do your delivery services cost? </h3>
          <span className={`${styles.arrow} ${activeIndex === 5 ? styles.active : ''}`}></span>
        </div>
        {activeIndex === 5 && <p className={styles.faqAnswer}> Our vehicles operate along fixed city routes. If a delivery requires crossing multiple routes, we transfer the goods at designated locations to ensure timely and efficient delivery.</p>}
      </div>
      <div className={styles.faqItem}>
        <div className={styles.faqQuestion} onClick={() => toggleFAQ(6)}>
          <h3>What payment methods do you accept? </h3>
          <span className={`${styles.arrow} ${activeIndex === 6 ? styles.active : ''}`}></span>
        </div>
        {activeIndex === 6 && <p className={styles.faqAnswer}> We accept major payment methods, like Cash, Net Banking including digital wallets like PhonePe, Paytm, Google Pay, etc.</p>}
      </div>
    </div>
  );
};

export default Faq;
