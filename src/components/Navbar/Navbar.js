import React from "react";
// eslint-disable-next-line
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>Chat APP</span>
      <div className={styles.user}>
        <img
          className={styles.img}
          src="https://images.pexels.com/photos/2424875/pexels-photo-2424875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="im"
        />
        <span>Name</span>
        <button className={styles.button}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
