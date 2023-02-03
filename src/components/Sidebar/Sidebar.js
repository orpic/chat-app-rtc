import React from "react";
// eslint-disable-next-line
import styles from "./Sidebar.module.css";
import { Navbar } from "../../components";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
};

export default Sidebar;
