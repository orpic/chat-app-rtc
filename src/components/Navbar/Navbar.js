import React from "react";
// eslint-disable-next-line
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Chat APP</span>
      <div className={styles.user}>
        <img src="" alt="im" />
        <span>Name</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
