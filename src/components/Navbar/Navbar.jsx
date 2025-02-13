import React, { useState } from "react";

import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";
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
            <a href="#about">Home</a>
          </li>
          <li>
            <a href="#experience">Our Zones</a>
          </li>
          <li>
            <a href="#projects">How it Works</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};