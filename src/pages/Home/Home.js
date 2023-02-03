import React from "react";
import { Chat, Sidebar } from "../../components";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.chat}>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;
