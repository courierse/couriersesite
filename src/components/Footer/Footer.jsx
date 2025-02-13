import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaMailBulk, FaMailchimp, FaTextHeight } from 'react-icons/fa'; // Import icons for social media

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo  */}
        <div className={styles.logoSection}>
 <img
   src="/assets/Footer/CourierSe.com logo.png"
  alt="Order"
  className={styles.logo}
/>
          <p className={styles.description}>Efficient Delivery Services</p>
        </div>

        {/* Navigation Section */}
        <div className={styles.navSection}>
          <h4 className={styles.navTitle}>Quick Links</h4>
          <ul className={styles.navList}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h4 className={styles.navTitle}>Contact Us</h4>
          <p>Email: info@courierse.com</p>
          <p>Phone: +91 7042028577</p>
          <p>Raas Engineers, Khasra No. - 279, Khera Chauganpur, Ecotech - III, Phase - I
              Greater Noida - 201306, India</p>
        </div>

        {/* Social Media Section */}
        <div className={styles.socialSection}>
          <h4 className={styles.navTitle}>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#"><FaPhone className={styles.icon} /></a>
            <a href="#"><FaMailBulk className={styles.icon} /></a>
            <a href="#"><FaInstagram className={styles.icon} /></a>
            {/* <a href="#"><FaLinkedin className={styles.icon} /></a> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className={styles.bottomSection}>
        <p>&copy; 2025 Courierse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
