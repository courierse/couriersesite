import React, { useState } from "react";

import styles from "./Navbar.module.css";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
    CourierSe.com
      </a>
      <div className={styles.menu}>
      <img
  className={styles.menuBtn}
  src={menuOpen ? "/assets/nav/closeIcon.png" : "/assets/nav/menu.png"}
  alt="Menu Button"
  style={{ width: "30px", height: "30px" }} 
  onClick={() => setMenuOpen(!menuOpen)}
/>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
        
          <li>
            <a href="#maps">Our Zones</a>
          </li>
          <li>
            <a href="#cards">How We Work</a>
          </li>
          <li>
            <a href="#contactus">Contact us</a>
          </li>
          <li>
            <a href="#faq">FAQs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};