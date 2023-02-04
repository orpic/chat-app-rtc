import React from "react";
// eslint-disable-next-line
import styles from "./Chats.module.css";

const Chats = () => {
  return (
    <div className={styles.chats}>
      <div className={styles.userChat}>
        <img
          className={styles.img}
          src="https://images.pexels.com/photos/2424875/pexels-photo-2424875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className={styles.userChatInfo}>
          <span>Name</span>
          <p>Hi there</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
